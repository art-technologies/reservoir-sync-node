import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace reservoir. */
export namespace reservoir {

    /** Chain enum. */
    enum Chain {
        MAINNET = 0,
        POLYGON = 1,
        ARBITRUM = 2,
        MUMBAI = 3,
        OPTIMISM = 4,
        SEPOLIA = 5,
        BASE = 6,
        ZORA = 7
    }

    /** Properties of an Amount. */
    interface IAmount {

        /** Amount raw */
        raw?: (string|null);

        /** Amount decimal */
        decimal?: (number|null);

        /** Amount usd */
        usd?: (number|null);

        /** Amount native */
        native?: (number|null);
    }

    /** Represents an Amount. */
    class Amount implements IAmount {

        /**
         * Constructs a new Amount.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IAmount);

        /** Amount raw. */
        public raw: string;

        /** Amount decimal. */
        public decimal: number;

        /** Amount usd. */
        public usd: number;

        /** Amount native. */
        public native: number;

        /**
         * Creates a new Amount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Amount instance
         */
        public static create(properties?: reservoir.IAmount): reservoir.Amount;

        /**
         * Encodes the specified Amount message. Does not implicitly {@link reservoir.Amount.verify|verify} messages.
         * @param message Amount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Amount message, length delimited. Does not implicitly {@link reservoir.Amount.verify|verify} messages.
         * @param message Amount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IAmount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Amount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Amount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Amount;

        /**
         * Decodes an Amount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Amount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Amount;

        /**
         * Verifies an Amount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Amount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Amount
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Amount;

        /**
         * Creates a plain object from an Amount message. Also converts values to other types if specified.
         * @param message Amount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Amount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Amount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Amount
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Currency. */
    interface ICurrency {

        /** Currency contract */
        contract?: (string|null);

        /** Currency name */
        name?: (string|null);

        /** Currency symbol */
        symbol?: (string|null);

        /** Currency decimals */
        decimals?: (number|null);
    }

    /** Represents a Currency. */
    class Currency implements ICurrency {

        /**
         * Constructs a new Currency.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ICurrency);

        /** Currency contract. */
        public contract: string;

        /** Currency name. */
        public name: string;

        /** Currency symbol. */
        public symbol: string;

        /** Currency decimals. */
        public decimals: number;

        /**
         * Creates a new Currency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Currency instance
         */
        public static create(properties?: reservoir.ICurrency): reservoir.Currency;

        /**
         * Encodes the specified Currency message. Does not implicitly {@link reservoir.Currency.verify|verify} messages.
         * @param message Currency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Currency message, length delimited. Does not implicitly {@link reservoir.Currency.verify|verify} messages.
         * @param message Currency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Currency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Currency;

        /**
         * Decodes a Currency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Currency;

        /**
         * Verifies a Currency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Currency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Currency
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Currency;

        /**
         * Creates a plain object from a Currency message. Also converts values to other types if specified.
         * @param message Currency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Currency, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Currency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Currency
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Price. */
    interface IPrice {

        /** Price currency */
        currency?: (reservoir.ICurrency|null);

        /** Price amount */
        amount?: (reservoir.IAmount|null);

        /** Price netAmount */
        netAmount?: (reservoir.IAmount|null);
    }

    /** Represents a Price. */
    class Price implements IPrice {

        /**
         * Constructs a new Price.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IPrice);

        /** Price currency. */
        public currency?: (reservoir.ICurrency|null);

        /** Price amount. */
        public amount?: (reservoir.IAmount|null);

        /** Price netAmount. */
        public netAmount?: (reservoir.IAmount|null);

        /**
         * Creates a new Price instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Price instance
         */
        public static create(properties?: reservoir.IPrice): reservoir.Price;

        /**
         * Encodes the specified Price message. Does not implicitly {@link reservoir.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link reservoir.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Price;

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Price;

        /**
         * Verifies a Price message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Price
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Price;

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @param message Price
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Price to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Price
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenData. */
    interface ITokenData {

        /** TokenData tokenId */
        tokenId?: (string|null);

        /** TokenData name */
        name?: (string|null);

        /** TokenData image */
        image?: (string|null);
    }

    /** Represents a TokenData. */
    class TokenData implements ITokenData {

        /**
         * Constructs a new TokenData.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ITokenData);

        /** TokenData tokenId. */
        public tokenId: string;

        /** TokenData name. */
        public name: string;

        /** TokenData image. */
        public image: string;

        /**
         * Creates a new TokenData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenData instance
         */
        public static create(properties?: reservoir.ITokenData): reservoir.TokenData;

        /**
         * Encodes the specified TokenData message. Does not implicitly {@link reservoir.TokenData.verify|verify} messages.
         * @param message TokenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ITokenData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenData message, length delimited. Does not implicitly {@link reservoir.TokenData.verify|verify} messages.
         * @param message TokenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ITokenData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.TokenData;

        /**
         * Decodes a TokenData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.TokenData;

        /**
         * Verifies a TokenData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenData
         */
        public static fromObject(object: { [k: string]: any }): reservoir.TokenData;

        /**
         * Creates a plain object from a TokenData message. Also converts values to other types if specified.
         * @param message TokenData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.TokenData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CollectionData. */
    interface ICollectionData {

        /** CollectionData id */
        id?: (string|null);

        /** CollectionData name */
        name?: (string|null);

        /** CollectionData image */
        image?: (string|null);
    }

    /** Represents a CollectionData. */
    class CollectionData implements ICollectionData {

        /**
         * Constructs a new CollectionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ICollectionData);

        /** CollectionData id. */
        public id: string;

        /** CollectionData name. */
        public name: string;

        /** CollectionData image. */
        public image: string;

        /**
         * Creates a new CollectionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CollectionData instance
         */
        public static create(properties?: reservoir.ICollectionData): reservoir.CollectionData;

        /**
         * Encodes the specified CollectionData message. Does not implicitly {@link reservoir.CollectionData.verify|verify} messages.
         * @param message CollectionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ICollectionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CollectionData message, length delimited. Does not implicitly {@link reservoir.CollectionData.verify|verify} messages.
         * @param message CollectionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ICollectionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CollectionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CollectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.CollectionData;

        /**
         * Decodes a CollectionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CollectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.CollectionData;

        /**
         * Verifies a CollectionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CollectionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CollectionData
         */
        public static fromObject(object: { [k: string]: any }): reservoir.CollectionData;

        /**
         * Creates a plain object from a CollectionData message. Also converts values to other types if specified.
         * @param message CollectionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.CollectionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CollectionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CollectionData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CriteriaData. */
    interface ICriteriaData {

        /** CriteriaData token */
        token?: (reservoir.ITokenData|null);

        /** CriteriaData collection */
        collection?: (reservoir.ICollectionData|null);
    }

    /** Represents a CriteriaData. */
    class CriteriaData implements ICriteriaData {

        /**
         * Constructs a new CriteriaData.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ICriteriaData);

        /** CriteriaData token. */
        public token?: (reservoir.ITokenData|null);

        /** CriteriaData collection. */
        public collection?: (reservoir.ICollectionData|null);

        /**
         * Creates a new CriteriaData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CriteriaData instance
         */
        public static create(properties?: reservoir.ICriteriaData): reservoir.CriteriaData;

        /**
         * Encodes the specified CriteriaData message. Does not implicitly {@link reservoir.CriteriaData.verify|verify} messages.
         * @param message CriteriaData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ICriteriaData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CriteriaData message, length delimited. Does not implicitly {@link reservoir.CriteriaData.verify|verify} messages.
         * @param message CriteriaData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ICriteriaData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CriteriaData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CriteriaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.CriteriaData;

        /**
         * Decodes a CriteriaData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CriteriaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.CriteriaData;

        /**
         * Verifies a CriteriaData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CriteriaData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CriteriaData
         */
        public static fromObject(object: { [k: string]: any }): reservoir.CriteriaData;

        /**
         * Creates a plain object from a CriteriaData message. Also converts values to other types if specified.
         * @param message CriteriaData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.CriteriaData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CriteriaData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CriteriaData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Criteria. */
    interface ICriteria {

        /** Criteria kind */
        kind?: (string|null);

        /** Criteria data */
        data?: (reservoir.ICriteriaData|null);
    }

    /** Represents a Criteria. */
    class Criteria implements ICriteria {

        /**
         * Constructs a new Criteria.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ICriteria);

        /** Criteria kind. */
        public kind: string;

        /** Criteria data. */
        public data?: (reservoir.ICriteriaData|null);

        /**
         * Creates a new Criteria instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Criteria instance
         */
        public static create(properties?: reservoir.ICriteria): reservoir.Criteria;

        /**
         * Encodes the specified Criteria message. Does not implicitly {@link reservoir.Criteria.verify|verify} messages.
         * @param message Criteria message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ICriteria, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Criteria message, length delimited. Does not implicitly {@link reservoir.Criteria.verify|verify} messages.
         * @param message Criteria message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ICriteria, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Criteria message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Criteria
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Criteria;

        /**
         * Decodes a Criteria message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Criteria
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Criteria;

        /**
         * Verifies a Criteria message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Criteria
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Criteria;

        /**
         * Creates a plain object from a Criteria message. Also converts values to other types if specified.
         * @param message Criteria
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Criteria, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Criteria to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Criteria
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Source. */
    interface ISource {

        /** Source id */
        id?: (string|null);

        /** Source domain */
        domain?: (string|null);

        /** Source name */
        name?: (string|null);

        /** Source icon */
        icon?: (string|null);

        /** Source url */
        url?: (string|null);
    }

    /** Represents a Source. */
    class Source implements ISource {

        /**
         * Constructs a new Source.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ISource);

        /** Source id. */
        public id: string;

        /** Source domain. */
        public domain: string;

        /** Source name. */
        public name: string;

        /** Source icon. */
        public icon: string;

        /** Source url. */
        public url: string;

        /**
         * Creates a new Source instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Source instance
         */
        public static create(properties?: reservoir.ISource): reservoir.Source;

        /**
         * Encodes the specified Source message. Does not implicitly {@link reservoir.Source.verify|verify} messages.
         * @param message Source message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link reservoir.Source.verify|verify} messages.
         * @param message Source message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Source message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Source;

        /**
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Source;

        /**
         * Verifies a Source message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Source
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Source;

        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @param message Source
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Source to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Source
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FeeBreakdown. */
    interface IFeeBreakdown {

        /** FeeBreakdown bps */
        bps?: (number|null);

        /** FeeBreakdown kind */
        kind?: (string|null);

        /** FeeBreakdown recipient */
        recipient?: (string|null);
    }

    /** Represents a FeeBreakdown. */
    class FeeBreakdown implements IFeeBreakdown {

        /**
         * Constructs a new FeeBreakdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IFeeBreakdown);

        /** FeeBreakdown bps. */
        public bps: number;

        /** FeeBreakdown kind. */
        public kind: string;

        /** FeeBreakdown recipient. */
        public recipient: string;

        /**
         * Creates a new FeeBreakdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeBreakdown instance
         */
        public static create(properties?: reservoir.IFeeBreakdown): reservoir.FeeBreakdown;

        /**
         * Encodes the specified FeeBreakdown message. Does not implicitly {@link reservoir.FeeBreakdown.verify|verify} messages.
         * @param message FeeBreakdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IFeeBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeBreakdown message, length delimited. Does not implicitly {@link reservoir.FeeBreakdown.verify|verify} messages.
         * @param message FeeBreakdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IFeeBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeBreakdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeBreakdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.FeeBreakdown;

        /**
         * Decodes a FeeBreakdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeBreakdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.FeeBreakdown;

        /**
         * Verifies a FeeBreakdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeBreakdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeBreakdown
         */
        public static fromObject(object: { [k: string]: any }): reservoir.FeeBreakdown;

        /**
         * Creates a plain object from a FeeBreakdown message. Also converts values to other types if specified.
         * @param message FeeBreakdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.FeeBreakdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeBreakdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FeeBreakdown
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Ask. */
    interface IAsk {

        /** Ask id */
        id?: (string|null);

        /** Ask kind */
        kind?: (string|null);

        /** Ask side */
        side?: (string|null);

        /** Ask status */
        status?: (string|null);

        /** Ask tokenSetId */
        tokenSetId?: (string|null);

        /** Ask tokenSetSchemaHash */
        tokenSetSchemaHash?: (string|null);

        /** Ask contract */
        contract?: (string|null);

        /** Ask maker */
        maker?: (string|null);

        /** Ask taker */
        taker?: (string|null);

        /** Ask price */
        price?: (reservoir.IPrice|null);

        /** Ask validFrom */
        validFrom?: (number|Long|null);

        /** Ask validUntil */
        validUntil?: (number|Long|null);

        /** Ask quantityFilled */
        quantityFilled?: (number|null);

        /** Ask quantityRemaining */
        quantityRemaining?: (number|null);

        /** Ask criteria */
        criteria?: (reservoir.ICriteria|null);

        /** Ask source */
        source?: (reservoir.ISource|null);

        /** Ask feeBps */
        feeBps?: (number|null);

        /** Ask feeBreakdown */
        feeBreakdown?: (reservoir.IFeeBreakdown[]|null);

        /** Ask expiration */
        expiration?: (number|Long|null);

        /** Ask isReservoir */
        isReservoir?: (boolean|null);

        /** Ask isDynamic */
        isDynamic?: (boolean|null);

        /** Ask createdAt */
        createdAt?: (string|null);

        /** Ask updatedAt */
        updatedAt?: (string|null);

        /** Ask chain */
        chain?: (reservoir.Chain|null);
    }

    /** Represents an Ask. */
    class Ask implements IAsk {

        /**
         * Constructs a new Ask.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IAsk);

        /** Ask id. */
        public id: string;

        /** Ask kind. */
        public kind: string;

        /** Ask side. */
        public side: string;

        /** Ask status. */
        public status: string;

        /** Ask tokenSetId. */
        public tokenSetId: string;

        /** Ask tokenSetSchemaHash. */
        public tokenSetSchemaHash: string;

        /** Ask contract. */
        public contract: string;

        /** Ask maker. */
        public maker: string;

        /** Ask taker. */
        public taker: string;

        /** Ask price. */
        public price?: (reservoir.IPrice|null);

        /** Ask validFrom. */
        public validFrom: (number|Long);

        /** Ask validUntil. */
        public validUntil: (number|Long);

        /** Ask quantityFilled. */
        public quantityFilled: number;

        /** Ask quantityRemaining. */
        public quantityRemaining: number;

        /** Ask criteria. */
        public criteria?: (reservoir.ICriteria|null);

        /** Ask source. */
        public source?: (reservoir.ISource|null);

        /** Ask feeBps. */
        public feeBps: number;

        /** Ask feeBreakdown. */
        public feeBreakdown: reservoir.IFeeBreakdown[];

        /** Ask expiration. */
        public expiration: (number|Long);

        /** Ask isReservoir. */
        public isReservoir: boolean;

        /** Ask isDynamic. */
        public isDynamic: boolean;

        /** Ask createdAt. */
        public createdAt: string;

        /** Ask updatedAt. */
        public updatedAt: string;

        /** Ask chain. */
        public chain: reservoir.Chain;

        /**
         * Creates a new Ask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ask instance
         */
        public static create(properties?: reservoir.IAsk): reservoir.Ask;

        /**
         * Encodes the specified Ask message. Does not implicitly {@link reservoir.Ask.verify|verify} messages.
         * @param message Ask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IAsk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ask message, length delimited. Does not implicitly {@link reservoir.Ask.verify|verify} messages.
         * @param message Ask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IAsk, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Ask;

        /**
         * Decodes an Ask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Ask;

        /**
         * Verifies an Ask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ask message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ask
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Ask;

        /**
         * Creates a plain object from an Ask message. Also converts values to other types if specified.
         * @param message Ask
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Ask, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ask to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ask
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Bid. */
    interface IBid {

        /** Bid id */
        id?: (string|null);

        /** Bid kind */
        kind?: (string|null);

        /** Bid side */
        side?: (string|null);

        /** Bid status */
        status?: (string|null);

        /** Bid tokenSetId */
        tokenSetId?: (string|null);

        /** Bid tokenSetSchemaHash */
        tokenSetSchemaHash?: (string|null);

        /** Bid contract */
        contract?: (string|null);

        /** Bid maker */
        maker?: (string|null);

        /** Bid taker */
        taker?: (string|null);

        /** Bid price */
        price?: (reservoir.IPrice|null);

        /** Bid validFrom */
        validFrom?: (number|Long|null);

        /** Bid validUntil */
        validUntil?: (number|Long|null);

        /** Bid quantityFilled */
        quantityFilled?: (number|null);

        /** Bid quantityRemaining */
        quantityRemaining?: (number|null);

        /** Bid criteria */
        criteria?: (reservoir.ICriteria|null);

        /** Bid source */
        source?: (reservoir.ISource|null);

        /** Bid feeBps */
        feeBps?: (number|null);

        /** Bid feeBreakdown */
        feeBreakdown?: (reservoir.IFeeBreakdown[]|null);

        /** Bid expiration */
        expiration?: (number|Long|null);

        /** Bid isReservoir */
        isReservoir?: (boolean|null);

        /** Bid isDynamic */
        isDynamic?: (boolean|null);

        /** Bid createdAt */
        createdAt?: (string|null);

        /** Bid updatedAt */
        updatedAt?: (string|null);

        /** Bid chain */
        chain?: (reservoir.Chain|null);
    }

    /** Represents a Bid. */
    class Bid implements IBid {

        /**
         * Constructs a new Bid.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IBid);

        /** Bid id. */
        public id: string;

        /** Bid kind. */
        public kind: string;

        /** Bid side. */
        public side: string;

        /** Bid status. */
        public status: string;

        /** Bid tokenSetId. */
        public tokenSetId: string;

        /** Bid tokenSetSchemaHash. */
        public tokenSetSchemaHash: string;

        /** Bid contract. */
        public contract: string;

        /** Bid maker. */
        public maker: string;

        /** Bid taker. */
        public taker: string;

        /** Bid price. */
        public price?: (reservoir.IPrice|null);

        /** Bid validFrom. */
        public validFrom: (number|Long);

        /** Bid validUntil. */
        public validUntil: (number|Long);

        /** Bid quantityFilled. */
        public quantityFilled: number;

        /** Bid quantityRemaining. */
        public quantityRemaining: number;

        /** Bid criteria. */
        public criteria?: (reservoir.ICriteria|null);

        /** Bid source. */
        public source?: (reservoir.ISource|null);

        /** Bid feeBps. */
        public feeBps: number;

        /** Bid feeBreakdown. */
        public feeBreakdown: reservoir.IFeeBreakdown[];

        /** Bid expiration. */
        public expiration: (number|Long);

        /** Bid isReservoir. */
        public isReservoir: boolean;

        /** Bid isDynamic. */
        public isDynamic: boolean;

        /** Bid createdAt. */
        public createdAt: string;

        /** Bid updatedAt. */
        public updatedAt: string;

        /** Bid chain. */
        public chain: reservoir.Chain;

        /**
         * Creates a new Bid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bid instance
         */
        public static create(properties?: reservoir.IBid): reservoir.Bid;

        /**
         * Encodes the specified Bid message. Does not implicitly {@link reservoir.Bid.verify|verify} messages.
         * @param message Bid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IBid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bid message, length delimited. Does not implicitly {@link reservoir.Bid.verify|verify} messages.
         * @param message Bid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IBid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Bid;

        /**
         * Decodes a Bid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Bid;

        /**
         * Verifies a Bid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bid
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Bid;

        /**
         * Creates a plain object from a Bid message. Also converts values to other types if specified.
         * @param message Bid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Bid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Bid
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Transfer. */
    interface ITransfer {

        /** Transfer id */
        id?: (string|null);

        /** Transfer token */
        token?: (reservoir.IToken|null);

        /** Transfer from */
        from?: (string|null);

        /** Transfer to */
        to?: (string|null);

        /** Transfer amount */
        amount?: (string|null);

        /** Transfer block */
        block?: (number|Long|null);

        /** Transfer txHash */
        txHash?: (string|null);

        /** Transfer logIndex */
        logIndex?: (number|null);

        /** Transfer batchIndex */
        batchIndex?: (number|null);

        /** Transfer timestamp */
        timestamp?: (number|Long|null);

        /** Transfer isDeleted */
        isDeleted?: (boolean|null);

        /** Transfer createdAt */
        createdAt?: (string|null);

        /** Transfer updatedAt */
        updatedAt?: (string|null);

        /** Transfer chain */
        chain?: (reservoir.Chain|null);
    }

    /** Represents a Transfer. */
    class Transfer implements ITransfer {

        /**
         * Constructs a new Transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ITransfer);

        /** Transfer id. */
        public id: string;

        /** Transfer token. */
        public token?: (reservoir.IToken|null);

        /** Transfer from. */
        public from: string;

        /** Transfer to. */
        public to: string;

        /** Transfer amount. */
        public amount: string;

        /** Transfer block. */
        public block: (number|Long);

        /** Transfer txHash. */
        public txHash: string;

        /** Transfer logIndex. */
        public logIndex: number;

        /** Transfer batchIndex. */
        public batchIndex: number;

        /** Transfer timestamp. */
        public timestamp: (number|Long);

        /** Transfer isDeleted. */
        public isDeleted: boolean;

        /** Transfer createdAt. */
        public createdAt: string;

        /** Transfer updatedAt. */
        public updatedAt: string;

        /** Transfer chain. */
        public chain: reservoir.Chain;

        /**
         * Creates a new Transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transfer instance
         */
        public static create(properties?: reservoir.ITransfer): reservoir.Transfer;

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link reservoir.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link reservoir.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Transfer;

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Transfer;

        /**
         * Verifies a Transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transfer
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Transfer;

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @param message Transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transfer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Collection. */
    interface ICollection {

        /** Collection id */
        id?: (string|null);

        /** Collection name */
        name?: (string|null);
    }

    /** Represents a Collection. */
    class Collection implements ICollection {

        /**
         * Constructs a new Collection.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ICollection);

        /** Collection id. */
        public id: string;

        /** Collection name. */
        public name: string;

        /**
         * Creates a new Collection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Collection instance
         */
        public static create(properties?: reservoir.ICollection): reservoir.Collection;

        /**
         * Encodes the specified Collection message. Does not implicitly {@link reservoir.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Collection message, length delimited. Does not implicitly {@link reservoir.Collection.verify|verify} messages.
         * @param message Collection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ICollection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Collection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Collection;

        /**
         * Decodes a Collection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Collection;

        /**
         * Verifies a Collection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Collection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Collection
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Collection;

        /**
         * Creates a plain object from a Collection message. Also converts values to other types if specified.
         * @param message Collection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Collection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Collection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Collection
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Token. */
    interface IToken {

        /** Token contract */
        contract?: (string|null);

        /** Token tokenId */
        tokenId?: (string|null);

        /** Token name */
        name?: (string|null);

        /** Token image */
        image?: (string|null);

        /** Token collection */
        collection?: (reservoir.ICollection|null);
    }

    /** Represents a Token. */
    class Token implements IToken {

        /**
         * Constructs a new Token.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.IToken);

        /** Token contract. */
        public contract: string;

        /** Token tokenId. */
        public tokenId: string;

        /** Token name. */
        public name?: (string|null);

        /** Token image. */
        public image?: (string|null);

        /** Token collection. */
        public collection?: (reservoir.ICollection|null);

        /**
         * Creates a new Token instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Token instance
         */
        public static create(properties?: reservoir.IToken): reservoir.Token;

        /**
         * Encodes the specified Token message. Does not implicitly {@link reservoir.Token.verify|verify} messages.
         * @param message Token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Token message, length delimited. Does not implicitly {@link reservoir.Token.verify|verify} messages.
         * @param message Token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Token message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Token;

        /**
         * Decodes a Token message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Token;

        /**
         * Verifies a Token message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Token message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Token
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Token;

        /**
         * Creates a plain object from a Token message. Also converts values to other types if specified.
         * @param message Token
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Token to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Token
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Sale. */
    interface ISale {

        /** Sale id */
        id?: (string|null);

        /** Sale saleId */
        saleId?: (string|null);

        /** Sale token */
        token?: (reservoir.IToken|null);

        /** Sale orderId */
        orderId?: (string|null);

        /** Sale orderSource */
        orderSource?: (string|null);

        /** Sale orderSide */
        orderSide?: (string|null);

        /** Sale orderKind */
        orderKind?: (string|null);

        /** Sale from */
        from?: (string|null);

        /** Sale to */
        to?: (string|null);

        /** Sale amount */
        amount?: (string|null);

        /** Sale fillSource */
        fillSource?: (string|null);

        /** Sale block */
        block?: (number|Long|null);

        /** Sale txHash */
        txHash?: (string|null);

        /** Sale logIndex */
        logIndex?: (number|null);

        /** Sale batchIndex */
        batchIndex?: (number|null);

        /** Sale timestamp */
        timestamp?: (number|Long|null);

        /** Sale price */
        price?: (reservoir.IPrice|null);

        /** Sale washTradingScore */
        washTradingScore?: (number|null);

        /** Sale createdAt */
        createdAt?: (string|null);

        /** Sale updatedAt */
        updatedAt?: (string|null);

        /** Sale isDeleted */
        isDeleted?: (boolean|null);

        /** Sale chain */
        chain?: (reservoir.Chain|null);
    }

    /** Represents a Sale. */
    class Sale implements ISale {

        /**
         * Constructs a new Sale.
         * @param [properties] Properties to set
         */
        constructor(properties?: reservoir.ISale);

        /** Sale id. */
        public id: string;

        /** Sale saleId. */
        public saleId: string;

        /** Sale token. */
        public token?: (reservoir.IToken|null);

        /** Sale orderId. */
        public orderId: string;

        /** Sale orderSource. */
        public orderSource: string;

        /** Sale orderSide. */
        public orderSide: string;

        /** Sale orderKind. */
        public orderKind: string;

        /** Sale from. */
        public from: string;

        /** Sale to. */
        public to: string;

        /** Sale amount. */
        public amount: string;

        /** Sale fillSource. */
        public fillSource: string;

        /** Sale block. */
        public block: (number|Long);

        /** Sale txHash. */
        public txHash: string;

        /** Sale logIndex. */
        public logIndex: number;

        /** Sale batchIndex. */
        public batchIndex: number;

        /** Sale timestamp. */
        public timestamp: (number|Long);

        /** Sale price. */
        public price?: (reservoir.IPrice|null);

        /** Sale washTradingScore. */
        public washTradingScore: number;

        /** Sale createdAt. */
        public createdAt: string;

        /** Sale updatedAt. */
        public updatedAt: string;

        /** Sale isDeleted. */
        public isDeleted: boolean;

        /** Sale chain. */
        public chain: reservoir.Chain;

        /**
         * Creates a new Sale instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sale instance
         */
        public static create(properties?: reservoir.ISale): reservoir.Sale;

        /**
         * Encodes the specified Sale message. Does not implicitly {@link reservoir.Sale.verify|verify} messages.
         * @param message Sale message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: reservoir.ISale, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sale message, length delimited. Does not implicitly {@link reservoir.Sale.verify|verify} messages.
         * @param message Sale message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: reservoir.ISale, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sale message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): reservoir.Sale;

        /**
         * Decodes a Sale message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): reservoir.Sale;

        /**
         * Verifies a Sale message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sale message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sale
         */
        public static fromObject(object: { [k: string]: any }): reservoir.Sale;

        /**
         * Creates a plain object from a Sale message. Also converts values to other types if specified.
         * @param message Sale
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: reservoir.Sale, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sale to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Sale
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
