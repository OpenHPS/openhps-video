import { DataSerializer } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { PerspectiveCameraObject } from '../../src';

describe('PerspectiveCameraObject', () => {
    it('should be serializable', () => {
        const camera = new PerspectiveCameraObject("test", "test", 1000, 1000, 45, 10, 10);
        const serialized = DataSerializer.serialize(camera);
        const deserialized = DataSerializer.deserialize(serialized);
        expect(camera).to.eql(deserialized);
    });
});
