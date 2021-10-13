import { SerializableObject } from '@openhps/core';
import { DepthImageFrame } from './DepthImageFrame';
import { CameraObject } from './object';

@SerializableObject()
export class DepthVideoFrame<I, C extends CameraObject = CameraObject> extends DepthImageFrame<I, C> {}
