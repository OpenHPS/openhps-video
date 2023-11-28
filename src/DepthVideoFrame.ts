import { SerializableObject } from '@openhps/core';
import { DepthImageFrame } from './DepthImageFrame';
import { CameraObject } from './object';

@SerializableObject()
export class DepthVideoFrame<D = any, I = any, C extends CameraObject = CameraObject> extends DepthImageFrame<
    D,
    I,
    C
> {}
