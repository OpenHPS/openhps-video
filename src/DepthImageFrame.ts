import { ImageFrame } from './ImageFrame';
import { DataSerializer, SerializableMember, SerializableObject } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class DepthImageFrame<I = any, C extends CameraObject = CameraObject> extends ImageFrame<I, C> {
    @SerializableMember({
        serializer: (obj) => {
            return DataSerializer.serialize(obj);
        },
        deserializer: (json) => {
            return DataSerializer.deserialize(json);
        },
    })
    depth: I;
}
