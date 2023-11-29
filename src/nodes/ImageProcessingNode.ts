import { ImageFrame } from '../ImageFrame';
import { ProcessingNode, ProcessingNodeOptions } from '@openhps/core';

export abstract class ImageProcessingNode<In = any, Out = any> extends ProcessingNode<ImageFrame<In>, ImageFrame<Out>> {
    protected options: ImageProcessingOptions;

    constructor(options?: ImageProcessingOptions) {
        super(options);
    }

    process(frame: ImageFrame<In>): Promise<ImageFrame<Out>> {
        return new Promise((resolve, reject) => {
            if (frame.image) {
                this.processImage(frame.image, frame)
                    .then((image) => {
                        frame.image = image as any;
                        resolve(frame as unknown as ImageFrame<Out>);
                    })
                    .catch(reject);
            } else {
                resolve(frame as unknown as ImageFrame<Out>);
            }
        });
    }

    public abstract processImage(image: In, frame?: ImageFrame<In>): Promise<Out>;
}

export type ImageProcessingOptions = ProcessingNodeOptions;
