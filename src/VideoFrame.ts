import { ImageFrame } from './ImageFrame';
import { SerializableObject } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class VideoFrame<I = any, C extends CameraObject = CameraObject> extends ImageFrame<I, C> {}
