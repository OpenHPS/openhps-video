import { DataSerializer, Matrix3 } from '@openhps/core';
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

    it('should extract information from a camera matrix', () => {
        const camera = new PerspectiveCameraObject("test");
        camera.cameraMatrix = new Matrix3();
        camera.cameraMatrix.elements = [
            1227.4268505094178,
            0,
            0,
            0,
            745.0652873150333,
            0,
            971.3223425564173,
            424.4964844126374,
            1
        ];
        expect(camera.focalLength).to.eql([1227.4268505094178, 745.0652873150333]);
        expect(camera.principalPoint).to.eql([971.3223425564173, 424.4964844126374]);
    });
});
