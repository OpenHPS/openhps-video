import { ImageFrame } from './ImageFrame';
import { SerializableObject } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class VideoFrame<I, C extends CameraObject = CameraObject> extends ImageFrame<I, C> {}
