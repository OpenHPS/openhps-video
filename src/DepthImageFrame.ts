import { ImageFrame } from './ImageFrame';
import { SerializableMember, SerializableObject } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class DepthImageFrame<I, C extends CameraObject = CameraObject> extends ImageFrame<I, C> {
    @SerializableMember()
    depth: I;
}
