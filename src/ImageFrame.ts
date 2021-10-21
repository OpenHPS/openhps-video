import { DataFrame, SerializableObject, SerializableMember } from '@openhps/core';
import { CameraObject } from './object';

@SerializableObject()
export class ImageFrame<I = any, C extends CameraObject = CameraObject> extends DataFrame {
    @SerializableMember()
    image: I;

    /**
     * Height (rows)
     */
    @SerializableMember()
    rows: number;
    /**
     * Width (cols)
     */
    @SerializableMember()
    cols: number;

    @SerializableMember()
    fourcc: number;
    @SerializableMember()
    fps: number;

    /**
     * Source object clone that captured the data frame
     *
     * @returns {CameraObject} Source data object
     */
    get source(): C {
        return super.source as C;
    }

    /**
     * Set the source object clone that captured the data frame
     *
     * @param {CameraObject} object Source data object
     */
    set source(object: C) {
        super.source = object;
    }
}
