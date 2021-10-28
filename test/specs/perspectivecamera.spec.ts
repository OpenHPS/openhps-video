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

    it('should use rows and cols as an alias for height and width', () => {
        const camera = new PerspectiveCameraObject("test", "test", 1000, 1500, 45, 10, 10);
        expect(camera.width).to.eql(camera.cols);
        expect(camera.height).to.eql(camera.rows);
        camera.rows = 111;
        camera.cols = 222;
        expect(camera.width).to.eql(camera.cols);
        expect(camera.height).to.eql(camera.rows);
    });
});
