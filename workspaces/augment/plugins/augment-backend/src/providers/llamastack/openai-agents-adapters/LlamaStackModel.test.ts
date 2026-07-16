/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  mapSnakeToCamel,
  mapOutputItems,
  mapInputItemToWireFormat,
  mapInputItemsToWireFormat,
} from './LlamaStackModel';

describe('mapSnakeToCamel', () => {
  it('maps call_id to callId for function_call items', () => {
    const item = {
      type: 'function_call',
      id: 'fc_123',
      call_id: 'call_abc',
      name: 'get_weather',
    };
    const result = mapSnakeToCamel(item);
    expect(result.callId).toBe('call_abc');
  });

  it('does not overwrite existing callId', () => {
    const item = {
      type: 'function_call',
      call_id: 'call_abc',
      callId: 'already_set',
    };
    const result = mapSnakeToCamel(item);
    expect(result.callId).toBe('already_set');
  });

  it('leaves items without call_id unchanged', () => {
    const item = { type: 'message', role: 'assistant' };
    const result = mapSnakeToCamel(item);
    expect(result.callId).toBeUndefined();
  });
});

describe('mapOutputItems', () => {
  it('maps call_id to callId across all items', () => {
    const items = [
      { type: 'function_call', id: 'fc_1', call_id: 'call_abc', name: 'fn1' },
      { type: 'message', role: 'assistant' },
      { type: 'function_call', id: 'fc_2', call_id: 'call_def', name: 'fn2' },
    ];
    const result = mapOutputItems(items);
    expect(result[0].callId).toBe('call_abc');
    expect(result[1].callId).toBeUndefined();
    expect(result[2].callId).toBe('call_def');
  });
});

describe('mapInputItemToWireFormat', () => {
  it('converts callId to call_id', () => {
    const item = {
      type: 'function_call',
      callId: 'call_abc',
      name: 'get_weather',
      arguments: '{}',
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.call_id).toBe('call_abc');
    expect(result.callId).toBeUndefined();
  });

  it('converts function_call_result type to function_call_output', () => {
    const item = {
      type: 'function_call_result',
      callId: 'call_abc',
      name: 'get_weather',
      status: 'completed',
      output: '{"temp": 72}',
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.type).toBe('function_call_output');
    expect(result.call_id).toBe('call_abc');
    expect(result.callId).toBeUndefined();
    expect(result.name).toBeUndefined();
    expect(result.status).toBeUndefined();
  });

  it('does not overwrite existing call_id', () => {
    const item = {
      type: 'function_call',
      callId: 'camel',
      call_id: 'snake',
      name: 'fn',
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.call_id).toBe('snake');
  });

  it('removes callId even when call_id already exists', () => {
    const item = {
      type: 'function_call',
      callId: 'camel',
      call_id: 'snake',
      name: 'fn',
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.callId).toBeUndefined();
    expect(result.call_id).toBe('snake');
  });

  it('leaves message items unchanged', () => {
    const item = { type: 'message', role: 'user', content: 'hello' };
    const result = mapInputItemToWireFormat(item);
    expect(result.type).toBe('message');
    expect(result.role).toBe('user');
    expect(result.callId).toBeUndefined();
    expect(result.call_id).toBeUndefined();
  });

  it('flattens structured output object to string for function_call_output', () => {
    const item = {
      type: 'function_call_result',
      callId: 'call_abc',
      name: 'transfer_to_hr',
      status: 'completed',
      output: { type: 'text', text: 'Transferred to Human Resources' },
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.type).toBe('function_call_output');
    expect(result.output).toBe('Transferred to Human Resources');
    expect(result.name).toBeUndefined();
    expect(result.status).toBeUndefined();
  });

  it('flattens structured output array to string for function_call_output', () => {
    const item = {
      type: 'function_call_result',
      callId: 'call_abc',
      name: 'fn',
      status: 'completed',
      output: [
        { type: 'text', text: 'line 1' },
        { type: 'text', text: 'line 2' },
      ],
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.output).toBe('line 1\nline 2');
  });

  it('preserves string output as-is for function_call_output', () => {
    const item = {
      type: 'function_call_result',
      callId: 'call_abc',
      name: 'fn',
      status: 'completed',
      output: 'already a string',
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.output).toBe('already a string');
  });

  it('strips namespace and providerData from all item types', () => {
    const item = {
      type: 'function_call',
      callId: 'call_abc',
      name: 'fn',
      arguments: '{}',
      namespace: 'some-ns',
      providerData: { extra: 'data' },
    };
    const result = mapInputItemToWireFormat(item);
    expect(result.namespace).toBeUndefined();
    expect(result.providerData).toBeUndefined();
    expect(result.name).toBe('fn');
  });
});

describe('mapInputItemsToWireFormat', () => {
  it('converts a realistic SDK handoff conversation history to wire format', () => {
    const items = [
      {
        type: 'message',
        role: 'user',
        content: 'help me with vacation policy',
      },
      {
        type: 'function_call',
        call_id: 'call_abc',
        callId: 'call_abc',
        name: 'transfer_to_human_resources',
        arguments: '{}',
        status: 'completed',
      },
      {
        type: 'function_call_result',
        callId: 'call_abc',
        name: 'transfer_to_human_resources',
        status: 'completed',
        output: { type: 'text', text: 'Transferred to Human Resources' },
        namespace: 'handoffs',
        providerData: { agent: 'router' },
      },
    ];
    const result = mapInputItemsToWireFormat(items);

    expect(result[0].type).toBe('message');
    expect(result[0].callId).toBeUndefined();

    expect(result[1].type).toBe('function_call');
    expect(result[1].call_id).toBe('call_abc');
    expect(result[1].callId).toBeUndefined();
    expect(result[1].name).toBe('transfer_to_human_resources');
    expect(result[1].namespace).toBeUndefined();

    expect(result[2].type).toBe('function_call_output');
    expect(result[2].call_id).toBe('call_abc');
    expect(result[2].callId).toBeUndefined();
    expect(result[2].output).toBe('Transferred to Human Resources');
    expect(result[2].name).toBeUndefined();
    expect(result[2].status).toBeUndefined();
    expect(result[2].namespace).toBeUndefined();
    expect(result[2].providerData).toBeUndefined();
  });
});
