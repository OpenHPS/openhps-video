import 'mocha';
import { ImageFrame } from '../../src';
import { DataSerializer } from '@openhps/core';
import { expect } from 'chai';

describe('ImageFrame', () => {
    describe('serialization', () => {

        it('should serialize images', () => {
            class Image {
                data: Buffer;
                width: number;
                height: number;
    
                constructor(data?: Buffer, width?: number, height?: number) {
                    this.data = data;
                    this.width = width;
                    this.height = height;
                }
            };
    
            const frame = new ImageFrame<Image>();
            frame.image = new Image(Buffer.from("test"), 100, 100);
            DataSerializer.registerType(Image, {
                serializer: (val) => {
                    if (!val) {
                        return undefined;
                    }
                    return {
                        data: val.data.toString(),
                        width: val.width,
                        height: val.height
                    };
                },
                deserializer: (json) => {
                    if (!json) {
                        return undefined;
                    }
                    return new Image(Buffer.from(json.data), json.width, json.height);
                }
            });
            const serialized = DataSerializer.serialize(frame);
            const deserialized = DataSerializer.deserialize(serialized);
            expect(deserialized).to.eql(frame);
        });

    });
});
