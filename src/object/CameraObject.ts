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
     * @returns {number[]} [k1, k2, p1, p2, (k3, (k4, k5))]
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
     * Get the focal length in pixels
     * @returns {[number, number]} Focal length for x and y axis
     */
    get focalLength(): [number, number] {
        if (!this.cameraMatrix) {
            return undefined;
        }
        return [this.cameraMatrix.elements[0], this.cameraMatrix.elements[4]];
    }

    /**
     * Get the principal point in pixels
     * @returns {[number, number]} Principal point for x and y axis
     */
    get principalPoint(): [number, number] {
        if (!this.cameraMatrix) {
            return undefined;
        }
        return [this.cameraMatrix.elements[6], this.cameraMatrix.elements[7]];
    }

    /**
     * Camera frustum aspect ratio.
     * @returns {number} Aspect ratio
     */
    get aspect(): number {
        return this.width / this.height;
    }

    /**
     * Height of image
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
        this.distortionCoefficients = this.distortionCoefficients ?? [0, 0, 0, 0, 0];
    }
}

/**
 * Color order
 */
export enum ColorOrder {
    RGB,
    BGR,
    GRAYSCALE,
    RGBA,
    BGRA,
}
