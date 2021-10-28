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
    height: number;
    /**
     * Width (cols)
     */
    @SerializableMember()
    width: number;

    @SerializableMember()
    fourcc: number;
    @SerializableMember()
    fps: number;

    /**
     * Height of image
     *
     * @returns {number} Height
     */
    get rows(): number {
        return this.height;
    }

    set rows(value: number) {
        this.height = value;
    }

    /**
     * Width of image
     *
     * @returns {number} Width
     */
    get cols(): number {
        return this.width;
    }

    set cols(value: number) {
        this.width = value;
    }

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
