import { ImageFrame } from './ImageFrame';
import { LengthUnit, SerializableMember, SerializableObject } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class DepthImageFrame<D = any, I = any, C extends CameraObject = CameraObject> extends ImageFrame<I, C> {
    @SerializableMember()
    depth: D;
    @SerializableMember()
    depthUnit: LengthUnit;
}
