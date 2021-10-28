import { SerializableObject, SerializableMember, DataObject, SerializableArrayMember, Matrix3 } from '@openhps/core';

/**
 * Camera source object
 */
@SerializableObject()
export class CameraObject extends DataObject {
    /**
     * Width
     */
    @SerializableMember()
    width: number;

    /**
     * Height
     */
    @SerializableMember()
    height: number;

    /**
     * Distortion coefficients
     */
    @SerializableArrayMember(Number)
    distortionCoefficients: number[];

    @SerializableMember()
    cameraMatrix: Matrix3;

    /**
     * Frames per second
     */
    @SerializableMember()
    fps: number;

    /**
     * Camera color order
     */
    @SerializableMember()
    colorOrder: ColorOrder = ColorOrder.RGB;

    /**
     * Camera frustum aspect ratio.
     *
     * @returns {number} Aspect ratio
     */
    get aspect(): number {
        return this.width / this.height;
    }

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

    constructor(uid?: string, displayName?: string, width?: number, height?: number) {
        super(uid, displayName);
        this.width = width || 0;
        this.height = height || 0;
    }
}

/**
 * Color order
 */
export enum ColorOrder {
    RGB,
    BGR,
    GRAYSCALE,
}
