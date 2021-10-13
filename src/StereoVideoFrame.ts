import { SerializableObject } from '@openhps/core';
import { StereoImageFrame } from './StereoImageFrame';

@SerializableObject()
export class StereoVideoFrame<I> extends StereoImageFrame<I> {}
