import { DataSerializer } from '@openhps/core';
import { expect } from 'chai';
import 'mocha';
import { PerspectiveCameraObject, StereoCameraObject } from '../../src';

describe('StereoCameraObject', () => {
    it('should be serializable', () => {
        const left = new PerspectiveCameraObject("test", "test", 1000, 1000, 45, 10, 10);
        const right = new PerspectiveCameraObject("test", "test", 1000, 1000, 45, 10, 10);
        const camera = new StereoCameraObject("test", "test", left, right);
        const serialized = DataSerializer.serialize(camera);
        const deserialized = DataSerializer.deserialize(serialized);
        expect(left.aspect).to.equal(1);
        expect(camera).to.eql(deserialized);
    });
});
