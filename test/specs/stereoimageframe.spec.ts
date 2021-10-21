import 'mocha';
import { CameraObject, ImageFrame, StereoCameraObject, StereoImageFrame } from '../../src';
import { DataSerializer } from '@openhps/core';
import { expect } from 'chai';

describe('StereoImageFrame', () => {

    it('should create a source abstraction', () => {
        class Image {
            data: Buffer;
            width: number;
            height: number;

            constructor(data?: Buffer, width?: number, height?: number) {
                this.data = data;
                this.width = width;
                this.height = height;
            }
        };

        const frame = new StereoImageFrame<Image>();
        frame.source = new StereoCameraObject();
        expect(frame.source).to.be.instanceOf(StereoCameraObject);
    });

});
