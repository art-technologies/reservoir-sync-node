/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.reservoir = (function() {

    /**
     * Namespace reservoir.
     * @exports reservoir
     * @namespace
     */
    var reservoir = {};

    /**
     * Chain enum.
     * @name reservoir.Chain
     * @enum {number}
     * @property {number} MAINNET=0 MAINNET value
     * @property {number} POLYGON=1 POLYGON value
     * @property {number} ARBITRUM=2 ARBITRUM value
     * @property {number} MUMBAI=3 MUMBAI value
     * @property {number} OPTIMISM=4 OPTIMISM value
     * @property {number} SEPOLIA=5 SEPOLIA value
     * @property {number} BASE=6 BASE value
     * @property {number} ZORA=7 ZORA value
     */
    reservoir.Chain = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MAINNET"] = 0;
        values[valuesById[1] = "POLYGON"] = 1;
        values[valuesById[2] = "ARBITRUM"] = 2;
        values[valuesById[3] = "MUMBAI"] = 3;
        values[valuesById[4] = "OPTIMISM"] = 4;
        values[valuesById[5] = "SEPOLIA"] = 5;
        values[valuesById[6] = "BASE"] = 6;
        values[valuesById[7] = "ZORA"] = 7;
        return values;
    })();

    reservoir.Amount = (function() {

        /**
         * Properties of an Amount.
         * @memberof reservoir
         * @interface IAmount
         * @property {string|null} [raw] Amount raw
         * @property {number|null} [decimal] Amount decimal
         * @property {number|null} [usd] Amount usd
         * @property {number|null} [native] Amount native
         */

        /**
         * Constructs a new Amount.
         * @memberof reservoir
         * @classdesc Represents an Amount.
         * @implements IAmount
         * @constructor
         * @param {reservoir.IAmount=} [properties] Properties to set
         */
        function Amount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Amount raw.
         * @member {string} raw
         * @memberof reservoir.Amount
         * @instance
         */
        Amount.prototype.raw = "";

        /**
         * Amount decimal.
         * @member {number} decimal
         * @memberof reservoir.Amount
         * @instance
         */
        Amount.prototype.decimal = 0;

        /**
         * Amount usd.
         * @member {number} usd
         * @memberof reservoir.Amount
         * @instance
         */
        Amount.prototype.usd = 0;

        /**
         * Amount native.
         * @member {number} native
         * @memberof reservoir.Amount
         * @instance
         */
        Amount.prototype.native = 0;

        /**
         * Creates a new Amount instance using the specified properties.
         * @function create
         * @memberof reservoir.Amount
         * @static
         * @param {reservoir.IAmount=} [properties] Properties to set
         * @returns {reservoir.Amount} Amount instance
         */
        Amount.create = function create(properties) {
            return new Amount(properties);
        };

        /**
         * Encodes the specified Amount message. Does not implicitly {@link reservoir.Amount.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Amount
         * @static
         * @param {reservoir.IAmount} message Amount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Amount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.raw != null && Object.hasOwnProperty.call(message, "raw"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.raw);
            if (message.decimal != null && Object.hasOwnProperty.call(message, "decimal"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.decimal);
            if (message.usd != null && Object.hasOwnProperty.call(message, "usd"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.usd);
            if (message.native != null && Object.hasOwnProperty.call(message, "native"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.native);
            return writer;
        };

        /**
         * Encodes the specified Amount message, length delimited. Does not implicitly {@link reservoir.Amount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Amount
         * @static
         * @param {reservoir.IAmount} message Amount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Amount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Amount message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Amount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Amount} Amount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Amount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Amount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.raw = reader.string();
                        break;
                    }
                case 2: {
                        message.decimal = reader.double();
                        break;
                    }
                case 3: {
                        message.usd = reader.double();
                        break;
                    }
                case 4: {
                        message.native = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Amount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Amount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Amount} Amount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Amount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Amount message.
         * @function verify
         * @memberof reservoir.Amount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Amount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.raw != null && message.hasOwnProperty("raw"))
                if (!$util.isString(message.raw))
                    return "raw: string expected";
            if (message.decimal != null && message.hasOwnProperty("decimal"))
                if (typeof message.decimal !== "number")
                    return "decimal: number expected";
            if (message.usd != null && message.hasOwnProperty("usd"))
                if (typeof message.usd !== "number")
                    return "usd: number expected";
            if (message.native != null && message.hasOwnProperty("native"))
                if (typeof message.native !== "number")
                    return "native: number expected";
            return null;
        };

        /**
         * Creates an Amount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Amount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Amount} Amount
         */
        Amount.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Amount)
                return object;
            var message = new $root.reservoir.Amount();
            if (object.raw != null)
                message.raw = String(object.raw);
            if (object.decimal != null)
                message.decimal = Number(object.decimal);
            if (object.usd != null)
                message.usd = Number(object.usd);
            if (object.native != null)
                message.native = Number(object.native);
            return message;
        };

        /**
         * Creates a plain object from an Amount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Amount
         * @static
         * @param {reservoir.Amount} message Amount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Amount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.raw = "";
                object.decimal = 0;
                object.usd = 0;
                object.native = 0;
            }
            if (message.raw != null && message.hasOwnProperty("raw"))
                object.raw = message.raw;
            if (message.decimal != null && message.hasOwnProperty("decimal"))
                object.decimal = options.json && !isFinite(message.decimal) ? String(message.decimal) : message.decimal;
            if (message.usd != null && message.hasOwnProperty("usd"))
                object.usd = options.json && !isFinite(message.usd) ? String(message.usd) : message.usd;
            if (message.native != null && message.hasOwnProperty("native"))
                object.native = options.json && !isFinite(message.native) ? String(message.native) : message.native;
            return object;
        };

        /**
         * Converts this Amount to JSON.
         * @function toJSON
         * @memberof reservoir.Amount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Amount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Amount
         * @function getTypeUrl
         * @memberof reservoir.Amount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Amount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Amount";
        };

        return Amount;
    })();

    reservoir.Currency = (function() {

        /**
         * Properties of a Currency.
         * @memberof reservoir
         * @interface ICurrency
         * @property {string|null} [contract] Currency contract
         * @property {string|null} [name] Currency name
         * @property {string|null} [symbol] Currency symbol
         * @property {number|null} [decimals] Currency decimals
         */

        /**
         * Constructs a new Currency.
         * @memberof reservoir
         * @classdesc Represents a Currency.
         * @implements ICurrency
         * @constructor
         * @param {reservoir.ICurrency=} [properties] Properties to set
         */
        function Currency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Currency contract.
         * @member {string} contract
         * @memberof reservoir.Currency
         * @instance
         */
        Currency.prototype.contract = "";

        /**
         * Currency name.
         * @member {string} name
         * @memberof reservoir.Currency
         * @instance
         */
        Currency.prototype.name = "";

        /**
         * Currency symbol.
         * @member {string} symbol
         * @memberof reservoir.Currency
         * @instance
         */
        Currency.prototype.symbol = "";

        /**
         * Currency decimals.
         * @member {number} decimals
         * @memberof reservoir.Currency
         * @instance
         */
        Currency.prototype.decimals = 0;

        /**
         * Creates a new Currency instance using the specified properties.
         * @function create
         * @memberof reservoir.Currency
         * @static
         * @param {reservoir.ICurrency=} [properties] Properties to set
         * @returns {reservoir.Currency} Currency instance
         */
        Currency.create = function create(properties) {
            return new Currency(properties);
        };

        /**
         * Encodes the specified Currency message. Does not implicitly {@link reservoir.Currency.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Currency
         * @static
         * @param {reservoir.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.contract);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
            if (message.decimals != null && Object.hasOwnProperty.call(message, "decimals"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.decimals);
            return writer;
        };

        /**
         * Encodes the specified Currency message, length delimited. Does not implicitly {@link reservoir.Currency.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Currency
         * @static
         * @param {reservoir.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Currency message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Currency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.contract = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.symbol = reader.string();
                        break;
                    }
                case 4: {
                        message.decimals = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Currency message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Currency message.
         * @function verify
         * @memberof reservoir.Currency
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Currency.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contract != null && message.hasOwnProperty("contract"))
                if (!$util.isString(message.contract))
                    return "contract: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                if (!$util.isInteger(message.decimals))
                    return "decimals: integer expected";
            return null;
        };

        /**
         * Creates a Currency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Currency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Currency} Currency
         */
        Currency.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Currency)
                return object;
            var message = new $root.reservoir.Currency();
            if (object.contract != null)
                message.contract = String(object.contract);
            if (object.name != null)
                message.name = String(object.name);
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.decimals != null)
                message.decimals = object.decimals | 0;
            return message;
        };

        /**
         * Creates a plain object from a Currency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Currency
         * @static
         * @param {reservoir.Currency} message Currency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Currency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.contract = "";
                object.name = "";
                object.symbol = "";
                object.decimals = 0;
            }
            if (message.contract != null && message.hasOwnProperty("contract"))
                object.contract = message.contract;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.decimals != null && message.hasOwnProperty("decimals"))
                object.decimals = message.decimals;
            return object;
        };

        /**
         * Converts this Currency to JSON.
         * @function toJSON
         * @memberof reservoir.Currency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Currency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Currency
         * @function getTypeUrl
         * @memberof reservoir.Currency
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Currency.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Currency";
        };

        return Currency;
    })();

    reservoir.Price = (function() {

        /**
         * Properties of a Price.
         * @memberof reservoir
         * @interface IPrice
         * @property {reservoir.ICurrency|null} [currency] Price currency
         * @property {reservoir.IAmount|null} [amount] Price amount
         * @property {reservoir.IAmount|null} [netAmount] Price netAmount
         */

        /**
         * Constructs a new Price.
         * @memberof reservoir
         * @classdesc Represents a Price.
         * @implements IPrice
         * @constructor
         * @param {reservoir.IPrice=} [properties] Properties to set
         */
        function Price(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Price currency.
         * @member {reservoir.ICurrency|null|undefined} currency
         * @memberof reservoir.Price
         * @instance
         */
        Price.prototype.currency = null;

        /**
         * Price amount.
         * @member {reservoir.IAmount|null|undefined} amount
         * @memberof reservoir.Price
         * @instance
         */
        Price.prototype.amount = null;

        /**
         * Price netAmount.
         * @member {reservoir.IAmount|null|undefined} netAmount
         * @memberof reservoir.Price
         * @instance
         */
        Price.prototype.netAmount = null;

        /**
         * Creates a new Price instance using the specified properties.
         * @function create
         * @memberof reservoir.Price
         * @static
         * @param {reservoir.IPrice=} [properties] Properties to set
         * @returns {reservoir.Price} Price instance
         */
        Price.create = function create(properties) {
            return new Price(properties);
        };

        /**
         * Encodes the specified Price message. Does not implicitly {@link reservoir.Price.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Price
         * @static
         * @param {reservoir.IPrice} message Price message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Price.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                $root.reservoir.Currency.encode(message.currency, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                $root.reservoir.Amount.encode(message.amount, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.netAmount != null && Object.hasOwnProperty.call(message, "netAmount"))
                $root.reservoir.Amount.encode(message.netAmount, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link reservoir.Price.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Price
         * @static
         * @param {reservoir.IPrice} message Price message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Price.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Price
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Price} Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Price.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Price();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.currency = $root.reservoir.Currency.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.amount = $root.reservoir.Amount.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.netAmount = $root.reservoir.Amount.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Price
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Price} Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Price.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Price message.
         * @function verify
         * @memberof reservoir.Price
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Price.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currency != null && message.hasOwnProperty("currency")) {
                var error = $root.reservoir.Currency.verify(message.currency);
                if (error)
                    return "currency." + error;
            }
            if (message.amount != null && message.hasOwnProperty("amount")) {
                var error = $root.reservoir.Amount.verify(message.amount);
                if (error)
                    return "amount." + error;
            }
            if (message.netAmount != null && message.hasOwnProperty("netAmount")) {
                var error = $root.reservoir.Amount.verify(message.netAmount);
                if (error)
                    return "netAmount." + error;
            }
            return null;
        };

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Price
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Price} Price
         */
        Price.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Price)
                return object;
            var message = new $root.reservoir.Price();
            if (object.currency != null) {
                if (typeof object.currency !== "object")
                    throw TypeError(".reservoir.Price.currency: object expected");
                message.currency = $root.reservoir.Currency.fromObject(object.currency);
            }
            if (object.amount != null) {
                if (typeof object.amount !== "object")
                    throw TypeError(".reservoir.Price.amount: object expected");
                message.amount = $root.reservoir.Amount.fromObject(object.amount);
            }
            if (object.netAmount != null) {
                if (typeof object.netAmount !== "object")
                    throw TypeError(".reservoir.Price.netAmount: object expected");
                message.netAmount = $root.reservoir.Amount.fromObject(object.netAmount);
            }
            return message;
        };

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Price
         * @static
         * @param {reservoir.Price} message Price
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Price.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.currency = null;
                object.amount = null;
                object.netAmount = null;
            }
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = $root.reservoir.Currency.toObject(message.currency, options);
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = $root.reservoir.Amount.toObject(message.amount, options);
            if (message.netAmount != null && message.hasOwnProperty("netAmount"))
                object.netAmount = $root.reservoir.Amount.toObject(message.netAmount, options);
            return object;
        };

        /**
         * Converts this Price to JSON.
         * @function toJSON
         * @memberof reservoir.Price
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Price.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Price
         * @function getTypeUrl
         * @memberof reservoir.Price
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Price.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Price";
        };

        return Price;
    })();

    reservoir.TokenData = (function() {

        /**
         * Properties of a TokenData.
         * @memberof reservoir
         * @interface ITokenData
         * @property {string|null} [tokenId] TokenData tokenId
         * @property {string|null} [name] TokenData name
         * @property {string|null} [image] TokenData image
         */

        /**
         * Constructs a new TokenData.
         * @memberof reservoir
         * @classdesc Represents a TokenData.
         * @implements ITokenData
         * @constructor
         * @param {reservoir.ITokenData=} [properties] Properties to set
         */
        function TokenData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenData tokenId.
         * @member {string} tokenId
         * @memberof reservoir.TokenData
         * @instance
         */
        TokenData.prototype.tokenId = "";

        /**
         * TokenData name.
         * @member {string} name
         * @memberof reservoir.TokenData
         * @instance
         */
        TokenData.prototype.name = "";

        /**
         * TokenData image.
         * @member {string} image
         * @memberof reservoir.TokenData
         * @instance
         */
        TokenData.prototype.image = "";

        /**
         * Creates a new TokenData instance using the specified properties.
         * @function create
         * @memberof reservoir.TokenData
         * @static
         * @param {reservoir.ITokenData=} [properties] Properties to set
         * @returns {reservoir.TokenData} TokenData instance
         */
        TokenData.create = function create(properties) {
            return new TokenData(properties);
        };

        /**
         * Encodes the specified TokenData message. Does not implicitly {@link reservoir.TokenData.verify|verify} messages.
         * @function encode
         * @memberof reservoir.TokenData
         * @static
         * @param {reservoir.ITokenData} message TokenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tokenId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
            return writer;
        };

        /**
         * Encodes the specified TokenData message, length delimited. Does not implicitly {@link reservoir.TokenData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.TokenData
         * @static
         * @param {reservoir.ITokenData} message TokenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenData message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.TokenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.TokenData} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.TokenData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.tokenId = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.image = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.TokenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.TokenData} TokenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenData message.
         * @function verify
         * @memberof reservoir.TokenData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            return null;
        };

        /**
         * Creates a TokenData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.TokenData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.TokenData} TokenData
         */
        TokenData.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.TokenData)
                return object;
            var message = new $root.reservoir.TokenData();
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.image != null)
                message.image = String(object.image);
            return message;
        };

        /**
         * Creates a plain object from a TokenData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.TokenData
         * @static
         * @param {reservoir.TokenData} message TokenData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tokenId = "";
                object.name = "";
                object.image = "";
            }
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            return object;
        };

        /**
         * Converts this TokenData to JSON.
         * @function toJSON
         * @memberof reservoir.TokenData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenData
         * @function getTypeUrl
         * @memberof reservoir.TokenData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.TokenData";
        };

        return TokenData;
    })();

    reservoir.CollectionData = (function() {

        /**
         * Properties of a CollectionData.
         * @memberof reservoir
         * @interface ICollectionData
         * @property {string|null} [id] CollectionData id
         * @property {string|null} [name] CollectionData name
         * @property {string|null} [image] CollectionData image
         */

        /**
         * Constructs a new CollectionData.
         * @memberof reservoir
         * @classdesc Represents a CollectionData.
         * @implements ICollectionData
         * @constructor
         * @param {reservoir.ICollectionData=} [properties] Properties to set
         */
        function CollectionData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CollectionData id.
         * @member {string} id
         * @memberof reservoir.CollectionData
         * @instance
         */
        CollectionData.prototype.id = "";

        /**
         * CollectionData name.
         * @member {string} name
         * @memberof reservoir.CollectionData
         * @instance
         */
        CollectionData.prototype.name = "";

        /**
         * CollectionData image.
         * @member {string} image
         * @memberof reservoir.CollectionData
         * @instance
         */
        CollectionData.prototype.image = "";

        /**
         * Creates a new CollectionData instance using the specified properties.
         * @function create
         * @memberof reservoir.CollectionData
         * @static
         * @param {reservoir.ICollectionData=} [properties] Properties to set
         * @returns {reservoir.CollectionData} CollectionData instance
         */
        CollectionData.create = function create(properties) {
            return new CollectionData(properties);
        };

        /**
         * Encodes the specified CollectionData message. Does not implicitly {@link reservoir.CollectionData.verify|verify} messages.
         * @function encode
         * @memberof reservoir.CollectionData
         * @static
         * @param {reservoir.ICollectionData} message CollectionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CollectionData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
            return writer;
        };

        /**
         * Encodes the specified CollectionData message, length delimited. Does not implicitly {@link reservoir.CollectionData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.CollectionData
         * @static
         * @param {reservoir.ICollectionData} message CollectionData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CollectionData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CollectionData message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.CollectionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.CollectionData} CollectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CollectionData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.CollectionData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.image = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CollectionData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.CollectionData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.CollectionData} CollectionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CollectionData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CollectionData message.
         * @function verify
         * @memberof reservoir.CollectionData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CollectionData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            return null;
        };

        /**
         * Creates a CollectionData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.CollectionData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.CollectionData} CollectionData
         */
        CollectionData.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.CollectionData)
                return object;
            var message = new $root.reservoir.CollectionData();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.image != null)
                message.image = String(object.image);
            return message;
        };

        /**
         * Creates a plain object from a CollectionData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.CollectionData
         * @static
         * @param {reservoir.CollectionData} message CollectionData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CollectionData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.image = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            return object;
        };

        /**
         * Converts this CollectionData to JSON.
         * @function toJSON
         * @memberof reservoir.CollectionData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CollectionData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CollectionData
         * @function getTypeUrl
         * @memberof reservoir.CollectionData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CollectionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.CollectionData";
        };

        return CollectionData;
    })();

    reservoir.CriteriaData = (function() {

        /**
         * Properties of a CriteriaData.
         * @memberof reservoir
         * @interface ICriteriaData
         * @property {reservoir.ITokenData|null} [token] CriteriaData token
         * @property {reservoir.ICollectionData|null} [collection] CriteriaData collection
         */

        /**
         * Constructs a new CriteriaData.
         * @memberof reservoir
         * @classdesc Represents a CriteriaData.
         * @implements ICriteriaData
         * @constructor
         * @param {reservoir.ICriteriaData=} [properties] Properties to set
         */
        function CriteriaData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CriteriaData token.
         * @member {reservoir.ITokenData|null|undefined} token
         * @memberof reservoir.CriteriaData
         * @instance
         */
        CriteriaData.prototype.token = null;

        /**
         * CriteriaData collection.
         * @member {reservoir.ICollectionData|null|undefined} collection
         * @memberof reservoir.CriteriaData
         * @instance
         */
        CriteriaData.prototype.collection = null;

        /**
         * Creates a new CriteriaData instance using the specified properties.
         * @function create
         * @memberof reservoir.CriteriaData
         * @static
         * @param {reservoir.ICriteriaData=} [properties] Properties to set
         * @returns {reservoir.CriteriaData} CriteriaData instance
         */
        CriteriaData.create = function create(properties) {
            return new CriteriaData(properties);
        };

        /**
         * Encodes the specified CriteriaData message. Does not implicitly {@link reservoir.CriteriaData.verify|verify} messages.
         * @function encode
         * @memberof reservoir.CriteriaData
         * @static
         * @param {reservoir.ICriteriaData} message CriteriaData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CriteriaData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                $root.reservoir.TokenData.encode(message.token, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.collection != null && Object.hasOwnProperty.call(message, "collection"))
                $root.reservoir.CollectionData.encode(message.collection, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CriteriaData message, length delimited. Does not implicitly {@link reservoir.CriteriaData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.CriteriaData
         * @static
         * @param {reservoir.ICriteriaData} message CriteriaData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CriteriaData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CriteriaData message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.CriteriaData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.CriteriaData} CriteriaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CriteriaData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.CriteriaData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = $root.reservoir.TokenData.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.collection = $root.reservoir.CollectionData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CriteriaData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.CriteriaData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.CriteriaData} CriteriaData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CriteriaData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CriteriaData message.
         * @function verify
         * @memberof reservoir.CriteriaData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CriteriaData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token")) {
                var error = $root.reservoir.TokenData.verify(message.token);
                if (error)
                    return "token." + error;
            }
            if (message.collection != null && message.hasOwnProperty("collection")) {
                var error = $root.reservoir.CollectionData.verify(message.collection);
                if (error)
                    return "collection." + error;
            }
            return null;
        };

        /**
         * Creates a CriteriaData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.CriteriaData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.CriteriaData} CriteriaData
         */
        CriteriaData.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.CriteriaData)
                return object;
            var message = new $root.reservoir.CriteriaData();
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".reservoir.CriteriaData.token: object expected");
                message.token = $root.reservoir.TokenData.fromObject(object.token);
            }
            if (object.collection != null) {
                if (typeof object.collection !== "object")
                    throw TypeError(".reservoir.CriteriaData.collection: object expected");
                message.collection = $root.reservoir.CollectionData.fromObject(object.collection);
            }
            return message;
        };

        /**
         * Creates a plain object from a CriteriaData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.CriteriaData
         * @static
         * @param {reservoir.CriteriaData} message CriteriaData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CriteriaData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = null;
                object.collection = null;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = $root.reservoir.TokenData.toObject(message.token, options);
            if (message.collection != null && message.hasOwnProperty("collection"))
                object.collection = $root.reservoir.CollectionData.toObject(message.collection, options);
            return object;
        };

        /**
         * Converts this CriteriaData to JSON.
         * @function toJSON
         * @memberof reservoir.CriteriaData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CriteriaData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CriteriaData
         * @function getTypeUrl
         * @memberof reservoir.CriteriaData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CriteriaData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.CriteriaData";
        };

        return CriteriaData;
    })();

    reservoir.Criteria = (function() {

        /**
         * Properties of a Criteria.
         * @memberof reservoir
         * @interface ICriteria
         * @property {string|null} [kind] Criteria kind
         * @property {reservoir.ICriteriaData|null} [data] Criteria data
         */

        /**
         * Constructs a new Criteria.
         * @memberof reservoir
         * @classdesc Represents a Criteria.
         * @implements ICriteria
         * @constructor
         * @param {reservoir.ICriteria=} [properties] Properties to set
         */
        function Criteria(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Criteria kind.
         * @member {string} kind
         * @memberof reservoir.Criteria
         * @instance
         */
        Criteria.prototype.kind = "";

        /**
         * Criteria data.
         * @member {reservoir.ICriteriaData|null|undefined} data
         * @memberof reservoir.Criteria
         * @instance
         */
        Criteria.prototype.data = null;

        /**
         * Creates a new Criteria instance using the specified properties.
         * @function create
         * @memberof reservoir.Criteria
         * @static
         * @param {reservoir.ICriteria=} [properties] Properties to set
         * @returns {reservoir.Criteria} Criteria instance
         */
        Criteria.create = function create(properties) {
            return new Criteria(properties);
        };

        /**
         * Encodes the specified Criteria message. Does not implicitly {@link reservoir.Criteria.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Criteria
         * @static
         * @param {reservoir.ICriteria} message Criteria message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Criteria.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.reservoir.CriteriaData.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Criteria message, length delimited. Does not implicitly {@link reservoir.Criteria.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Criteria
         * @static
         * @param {reservoir.ICriteria} message Criteria message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Criteria.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Criteria message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Criteria
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Criteria} Criteria
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Criteria.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Criteria();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.kind = reader.string();
                        break;
                    }
                case 2: {
                        message.data = $root.reservoir.CriteriaData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Criteria message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Criteria
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Criteria} Criteria
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Criteria.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Criteria message.
         * @function verify
         * @memberof reservoir.Criteria
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Criteria.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.reservoir.CriteriaData.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a Criteria message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Criteria
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Criteria} Criteria
         */
        Criteria.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Criteria)
                return object;
            var message = new $root.reservoir.Criteria();
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".reservoir.Criteria.data: object expected");
                message.data = $root.reservoir.CriteriaData.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a Criteria message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Criteria
         * @static
         * @param {reservoir.Criteria} message Criteria
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Criteria.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.kind = "";
                object.data = null;
            }
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.reservoir.CriteriaData.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this Criteria to JSON.
         * @function toJSON
         * @memberof reservoir.Criteria
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Criteria.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Criteria
         * @function getTypeUrl
         * @memberof reservoir.Criteria
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Criteria.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Criteria";
        };

        return Criteria;
    })();

    reservoir.Source = (function() {

        /**
         * Properties of a Source.
         * @memberof reservoir
         * @interface ISource
         * @property {string|null} [id] Source id
         * @property {string|null} [domain] Source domain
         * @property {string|null} [name] Source name
         * @property {string|null} [icon] Source icon
         * @property {string|null} [url] Source url
         */

        /**
         * Constructs a new Source.
         * @memberof reservoir
         * @classdesc Represents a Source.
         * @implements ISource
         * @constructor
         * @param {reservoir.ISource=} [properties] Properties to set
         */
        function Source(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Source id.
         * @member {string} id
         * @memberof reservoir.Source
         * @instance
         */
        Source.prototype.id = "";

        /**
         * Source domain.
         * @member {string} domain
         * @memberof reservoir.Source
         * @instance
         */
        Source.prototype.domain = "";

        /**
         * Source name.
         * @member {string} name
         * @memberof reservoir.Source
         * @instance
         */
        Source.prototype.name = "";

        /**
         * Source icon.
         * @member {string} icon
         * @memberof reservoir.Source
         * @instance
         */
        Source.prototype.icon = "";

        /**
         * Source url.
         * @member {string} url
         * @memberof reservoir.Source
         * @instance
         */
        Source.prototype.url = "";

        /**
         * Creates a new Source instance using the specified properties.
         * @function create
         * @memberof reservoir.Source
         * @static
         * @param {reservoir.ISource=} [properties] Properties to set
         * @returns {reservoir.Source} Source instance
         */
        Source.create = function create(properties) {
            return new Source(properties);
        };

        /**
         * Encodes the specified Source message. Does not implicitly {@link reservoir.Source.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Source
         * @static
         * @param {reservoir.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified Source message, length delimited. Does not implicitly {@link reservoir.Source.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Source
         * @static
         * @param {reservoir.ISource} message Source message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Source.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Source message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Source();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.domain = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.icon = reader.string();
                        break;
                    }
                case 5: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Source message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Source
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Source} Source
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Source.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Source message.
         * @function verify
         * @memberof reservoir.Source
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Source.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.domain != null && message.hasOwnProperty("domain"))
                if (!$util.isString(message.domain))
                    return "domain: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a Source message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Source
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Source} Source
         */
        Source.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Source)
                return object;
            var message = new $root.reservoir.Source();
            if (object.id != null)
                message.id = String(object.id);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a Source message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Source
         * @static
         * @param {reservoir.Source} message Source
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Source.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.domain = "";
                object.name = "";
                object.icon = "";
                object.url = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this Source to JSON.
         * @function toJSON
         * @memberof reservoir.Source
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Source.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Source
         * @function getTypeUrl
         * @memberof reservoir.Source
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Source.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Source";
        };

        return Source;
    })();

    reservoir.FeeBreakdown = (function() {

        /**
         * Properties of a FeeBreakdown.
         * @memberof reservoir
         * @interface IFeeBreakdown
         * @property {number|null} [bps] FeeBreakdown bps
         * @property {string|null} [kind] FeeBreakdown kind
         * @property {string|null} [recipient] FeeBreakdown recipient
         */

        /**
         * Constructs a new FeeBreakdown.
         * @memberof reservoir
         * @classdesc Represents a FeeBreakdown.
         * @implements IFeeBreakdown
         * @constructor
         * @param {reservoir.IFeeBreakdown=} [properties] Properties to set
         */
        function FeeBreakdown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FeeBreakdown bps.
         * @member {number} bps
         * @memberof reservoir.FeeBreakdown
         * @instance
         */
        FeeBreakdown.prototype.bps = 0;

        /**
         * FeeBreakdown kind.
         * @member {string} kind
         * @memberof reservoir.FeeBreakdown
         * @instance
         */
        FeeBreakdown.prototype.kind = "";

        /**
         * FeeBreakdown recipient.
         * @member {string} recipient
         * @memberof reservoir.FeeBreakdown
         * @instance
         */
        FeeBreakdown.prototype.recipient = "";

        /**
         * Creates a new FeeBreakdown instance using the specified properties.
         * @function create
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {reservoir.IFeeBreakdown=} [properties] Properties to set
         * @returns {reservoir.FeeBreakdown} FeeBreakdown instance
         */
        FeeBreakdown.create = function create(properties) {
            return new FeeBreakdown(properties);
        };

        /**
         * Encodes the specified FeeBreakdown message. Does not implicitly {@link reservoir.FeeBreakdown.verify|verify} messages.
         * @function encode
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {reservoir.IFeeBreakdown} message FeeBreakdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeBreakdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bps != null && Object.hasOwnProperty.call(message, "bps"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bps);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kind);
            if (message.recipient != null && Object.hasOwnProperty.call(message, "recipient"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.recipient);
            return writer;
        };

        /**
         * Encodes the specified FeeBreakdown message, length delimited. Does not implicitly {@link reservoir.FeeBreakdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {reservoir.IFeeBreakdown} message FeeBreakdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FeeBreakdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FeeBreakdown message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.FeeBreakdown} FeeBreakdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeBreakdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.FeeBreakdown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bps = reader.int32();
                        break;
                    }
                case 2: {
                        message.kind = reader.string();
                        break;
                    }
                case 3: {
                        message.recipient = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FeeBreakdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.FeeBreakdown} FeeBreakdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FeeBreakdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FeeBreakdown message.
         * @function verify
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FeeBreakdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bps != null && message.hasOwnProperty("bps"))
                if (!$util.isInteger(message.bps))
                    return "bps: integer expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                if (!$util.isString(message.recipient))
                    return "recipient: string expected";
            return null;
        };

        /**
         * Creates a FeeBreakdown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.FeeBreakdown} FeeBreakdown
         */
        FeeBreakdown.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.FeeBreakdown)
                return object;
            var message = new $root.reservoir.FeeBreakdown();
            if (object.bps != null)
                message.bps = object.bps | 0;
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.recipient != null)
                message.recipient = String(object.recipient);
            return message;
        };

        /**
         * Creates a plain object from a FeeBreakdown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {reservoir.FeeBreakdown} message FeeBreakdown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FeeBreakdown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.bps = 0;
                object.kind = "";
                object.recipient = "";
            }
            if (message.bps != null && message.hasOwnProperty("bps"))
                object.bps = message.bps;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.recipient != null && message.hasOwnProperty("recipient"))
                object.recipient = message.recipient;
            return object;
        };

        /**
         * Converts this FeeBreakdown to JSON.
         * @function toJSON
         * @memberof reservoir.FeeBreakdown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FeeBreakdown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FeeBreakdown
         * @function getTypeUrl
         * @memberof reservoir.FeeBreakdown
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FeeBreakdown.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.FeeBreakdown";
        };

        return FeeBreakdown;
    })();

    reservoir.Ask = (function() {

        /**
         * Properties of an Ask.
         * @memberof reservoir
         * @interface IAsk
         * @property {string|null} [id] Ask id
         * @property {string|null} [kind] Ask kind
         * @property {string|null} [side] Ask side
         * @property {string|null} [status] Ask status
         * @property {string|null} [tokenSetId] Ask tokenSetId
         * @property {string|null} [tokenSetSchemaHash] Ask tokenSetSchemaHash
         * @property {string|null} [contract] Ask contract
         * @property {string|null} [maker] Ask maker
         * @property {string|null} [taker] Ask taker
         * @property {reservoir.IPrice|null} [price] Ask price
         * @property {number|Long|null} [validFrom] Ask validFrom
         * @property {number|Long|null} [validUntil] Ask validUntil
         * @property {number|null} [quantityFilled] Ask quantityFilled
         * @property {number|null} [quantityRemaining] Ask quantityRemaining
         * @property {reservoir.ICriteria|null} [criteria] Ask criteria
         * @property {reservoir.ISource|null} [source] Ask source
         * @property {number|null} [feeBps] Ask feeBps
         * @property {Array.<reservoir.IFeeBreakdown>|null} [feeBreakdown] Ask feeBreakdown
         * @property {number|Long|null} [expiration] Ask expiration
         * @property {boolean|null} [isReservoir] Ask isReservoir
         * @property {boolean|null} [isDynamic] Ask isDynamic
         * @property {string|null} [createdAt] Ask createdAt
         * @property {string|null} [updatedAt] Ask updatedAt
         * @property {reservoir.Chain|null} [chain] Ask chain
         */

        /**
         * Constructs a new Ask.
         * @memberof reservoir
         * @classdesc Represents an Ask.
         * @implements IAsk
         * @constructor
         * @param {reservoir.IAsk=} [properties] Properties to set
         */
        function Ask(properties) {
            this.feeBreakdown = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ask id.
         * @member {string} id
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.id = "";

        /**
         * Ask kind.
         * @member {string} kind
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.kind = "";

        /**
         * Ask side.
         * @member {string} side
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.side = "";

        /**
         * Ask status.
         * @member {string} status
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.status = "";

        /**
         * Ask tokenSetId.
         * @member {string} tokenSetId
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.tokenSetId = "";

        /**
         * Ask tokenSetSchemaHash.
         * @member {string} tokenSetSchemaHash
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.tokenSetSchemaHash = "";

        /**
         * Ask contract.
         * @member {string} contract
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.contract = "";

        /**
         * Ask maker.
         * @member {string} maker
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.maker = "";

        /**
         * Ask taker.
         * @member {string} taker
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.taker = "";

        /**
         * Ask price.
         * @member {reservoir.IPrice|null|undefined} price
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.price = null;

        /**
         * Ask validFrom.
         * @member {number|Long} validFrom
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.validFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ask validUntil.
         * @member {number|Long} validUntil
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.validUntil = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ask quantityFilled.
         * @member {number} quantityFilled
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.quantityFilled = 0;

        /**
         * Ask quantityRemaining.
         * @member {number} quantityRemaining
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.quantityRemaining = 0;

        /**
         * Ask criteria.
         * @member {reservoir.ICriteria|null|undefined} criteria
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.criteria = null;

        /**
         * Ask source.
         * @member {reservoir.ISource|null|undefined} source
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.source = null;

        /**
         * Ask feeBps.
         * @member {number} feeBps
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.feeBps = 0;

        /**
         * Ask feeBreakdown.
         * @member {Array.<reservoir.IFeeBreakdown>} feeBreakdown
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.feeBreakdown = $util.emptyArray;

        /**
         * Ask expiration.
         * @member {number|Long} expiration
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.expiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Ask isReservoir.
         * @member {boolean} isReservoir
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.isReservoir = false;

        /**
         * Ask isDynamic.
         * @member {boolean} isDynamic
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.isDynamic = false;

        /**
         * Ask createdAt.
         * @member {string} createdAt
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.createdAt = "";

        /**
         * Ask updatedAt.
         * @member {string} updatedAt
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.updatedAt = "";

        /**
         * Ask chain.
         * @member {reservoir.Chain} chain
         * @memberof reservoir.Ask
         * @instance
         */
        Ask.prototype.chain = 0;

        /**
         * Creates a new Ask instance using the specified properties.
         * @function create
         * @memberof reservoir.Ask
         * @static
         * @param {reservoir.IAsk=} [properties] Properties to set
         * @returns {reservoir.Ask} Ask instance
         */
        Ask.create = function create(properties) {
            return new Ask(properties);
        };

        /**
         * Encodes the specified Ask message. Does not implicitly {@link reservoir.Ask.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Ask
         * @static
         * @param {reservoir.IAsk} message Ask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kind);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.side);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
            if (message.tokenSetId != null && Object.hasOwnProperty.call(message, "tokenSetId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tokenSetId);
            if (message.tokenSetSchemaHash != null && Object.hasOwnProperty.call(message, "tokenSetSchemaHash"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tokenSetSchemaHash);
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.contract);
            if (message.maker != null && Object.hasOwnProperty.call(message, "maker"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.maker);
            if (message.taker != null && Object.hasOwnProperty.call(message, "taker"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.taker);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                $root.reservoir.Price.encode(message.price, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.validFrom != null && Object.hasOwnProperty.call(message, "validFrom"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.validFrom);
            if (message.validUntil != null && Object.hasOwnProperty.call(message, "validUntil"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.validUntil);
            if (message.quantityFilled != null && Object.hasOwnProperty.call(message, "quantityFilled"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.quantityFilled);
            if (message.quantityRemaining != null && Object.hasOwnProperty.call(message, "quantityRemaining"))
                writer.uint32(/* id 14, wireType 1 =*/113).double(message.quantityRemaining);
            if (message.criteria != null && Object.hasOwnProperty.call(message, "criteria"))
                $root.reservoir.Criteria.encode(message.criteria, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.reservoir.Source.encode(message.source, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.feeBps != null && Object.hasOwnProperty.call(message, "feeBps"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.feeBps);
            if (message.feeBreakdown != null && message.feeBreakdown.length)
                for (var i = 0; i < message.feeBreakdown.length; ++i)
                    $root.reservoir.FeeBreakdown.encode(message.feeBreakdown[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.expiration != null && Object.hasOwnProperty.call(message, "expiration"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.expiration);
            if (message.isReservoir != null && Object.hasOwnProperty.call(message, "isReservoir"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.isReservoir);
            if (message.isDynamic != null && Object.hasOwnProperty.call(message, "isDynamic"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.isDynamic);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.updatedAt);
            if (message.chain != null && Object.hasOwnProperty.call(message, "chain"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.chain);
            return writer;
        };

        /**
         * Encodes the specified Ask message, length delimited. Does not implicitly {@link reservoir.Ask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Ask
         * @static
         * @param {reservoir.IAsk} message Ask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ask message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Ask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Ask} Ask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Ask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.kind = reader.string();
                        break;
                    }
                case 3: {
                        message.side = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.string();
                        break;
                    }
                case 5: {
                        message.tokenSetId = reader.string();
                        break;
                    }
                case 6: {
                        message.tokenSetSchemaHash = reader.string();
                        break;
                    }
                case 7: {
                        message.contract = reader.string();
                        break;
                    }
                case 8: {
                        message.maker = reader.string();
                        break;
                    }
                case 9: {
                        message.taker = reader.string();
                        break;
                    }
                case 10: {
                        message.price = $root.reservoir.Price.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.validFrom = reader.int64();
                        break;
                    }
                case 12: {
                        message.validUntil = reader.int64();
                        break;
                    }
                case 13: {
                        message.quantityFilled = reader.double();
                        break;
                    }
                case 14: {
                        message.quantityRemaining = reader.double();
                        break;
                    }
                case 15: {
                        message.criteria = $root.reservoir.Criteria.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.source = $root.reservoir.Source.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.feeBps = reader.int32();
                        break;
                    }
                case 18: {
                        if (!(message.feeBreakdown && message.feeBreakdown.length))
                            message.feeBreakdown = [];
                        message.feeBreakdown.push($root.reservoir.FeeBreakdown.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        message.expiration = reader.int64();
                        break;
                    }
                case 20: {
                        message.isReservoir = reader.bool();
                        break;
                    }
                case 21: {
                        message.isDynamic = reader.bool();
                        break;
                    }
                case 22: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 23: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 24: {
                        message.chain = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Ask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Ask} Ask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ask message.
         * @function verify
         * @memberof reservoir.Ask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                if (!$util.isString(message.side))
                    return "side: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.tokenSetId != null && message.hasOwnProperty("tokenSetId"))
                if (!$util.isString(message.tokenSetId))
                    return "tokenSetId: string expected";
            if (message.tokenSetSchemaHash != null && message.hasOwnProperty("tokenSetSchemaHash"))
                if (!$util.isString(message.tokenSetSchemaHash))
                    return "tokenSetSchemaHash: string expected";
            if (message.contract != null && message.hasOwnProperty("contract"))
                if (!$util.isString(message.contract))
                    return "contract: string expected";
            if (message.maker != null && message.hasOwnProperty("maker"))
                if (!$util.isString(message.maker))
                    return "maker: string expected";
            if (message.taker != null && message.hasOwnProperty("taker"))
                if (!$util.isString(message.taker))
                    return "taker: string expected";
            if (message.price != null && message.hasOwnProperty("price")) {
                var error = $root.reservoir.Price.verify(message.price);
                if (error)
                    return "price." + error;
            }
            if (message.validFrom != null && message.hasOwnProperty("validFrom"))
                if (!$util.isInteger(message.validFrom) && !(message.validFrom && $util.isInteger(message.validFrom.low) && $util.isInteger(message.validFrom.high)))
                    return "validFrom: integer|Long expected";
            if (message.validUntil != null && message.hasOwnProperty("validUntil"))
                if (!$util.isInteger(message.validUntil) && !(message.validUntil && $util.isInteger(message.validUntil.low) && $util.isInteger(message.validUntil.high)))
                    return "validUntil: integer|Long expected";
            if (message.quantityFilled != null && message.hasOwnProperty("quantityFilled"))
                if (typeof message.quantityFilled !== "number")
                    return "quantityFilled: number expected";
            if (message.quantityRemaining != null && message.hasOwnProperty("quantityRemaining"))
                if (typeof message.quantityRemaining !== "number")
                    return "quantityRemaining: number expected";
            if (message.criteria != null && message.hasOwnProperty("criteria")) {
                var error = $root.reservoir.Criteria.verify(message.criteria);
                if (error)
                    return "criteria." + error;
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                var error = $root.reservoir.Source.verify(message.source);
                if (error)
                    return "source." + error;
            }
            if (message.feeBps != null && message.hasOwnProperty("feeBps"))
                if (!$util.isInteger(message.feeBps))
                    return "feeBps: integer expected";
            if (message.feeBreakdown != null && message.hasOwnProperty("feeBreakdown")) {
                if (!Array.isArray(message.feeBreakdown))
                    return "feeBreakdown: array expected";
                for (var i = 0; i < message.feeBreakdown.length; ++i) {
                    var error = $root.reservoir.FeeBreakdown.verify(message.feeBreakdown[i]);
                    if (error)
                        return "feeBreakdown." + error;
                }
            }
            if (message.expiration != null && message.hasOwnProperty("expiration"))
                if (!$util.isInteger(message.expiration) && !(message.expiration && $util.isInteger(message.expiration.low) && $util.isInteger(message.expiration.high)))
                    return "expiration: integer|Long expected";
            if (message.isReservoir != null && message.hasOwnProperty("isReservoir"))
                if (typeof message.isReservoir !== "boolean")
                    return "isReservoir: boolean expected";
            if (message.isDynamic != null && message.hasOwnProperty("isDynamic"))
                if (typeof message.isDynamic !== "boolean")
                    return "isDynamic: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                switch (message.chain) {
                default:
                    return "chain: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates an Ask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Ask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Ask} Ask
         */
        Ask.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Ask)
                return object;
            var message = new $root.reservoir.Ask();
            if (object.id != null)
                message.id = String(object.id);
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.side != null)
                message.side = String(object.side);
            if (object.status != null)
                message.status = String(object.status);
            if (object.tokenSetId != null)
                message.tokenSetId = String(object.tokenSetId);
            if (object.tokenSetSchemaHash != null)
                message.tokenSetSchemaHash = String(object.tokenSetSchemaHash);
            if (object.contract != null)
                message.contract = String(object.contract);
            if (object.maker != null)
                message.maker = String(object.maker);
            if (object.taker != null)
                message.taker = String(object.taker);
            if (object.price != null) {
                if (typeof object.price !== "object")
                    throw TypeError(".reservoir.Ask.price: object expected");
                message.price = $root.reservoir.Price.fromObject(object.price);
            }
            if (object.validFrom != null)
                if ($util.Long)
                    (message.validFrom = $util.Long.fromValue(object.validFrom)).unsigned = false;
                else if (typeof object.validFrom === "string")
                    message.validFrom = parseInt(object.validFrom, 10);
                else if (typeof object.validFrom === "number")
                    message.validFrom = object.validFrom;
                else if (typeof object.validFrom === "object")
                    message.validFrom = new $util.LongBits(object.validFrom.low >>> 0, object.validFrom.high >>> 0).toNumber();
            if (object.validUntil != null)
                if ($util.Long)
                    (message.validUntil = $util.Long.fromValue(object.validUntil)).unsigned = false;
                else if (typeof object.validUntil === "string")
                    message.validUntil = parseInt(object.validUntil, 10);
                else if (typeof object.validUntil === "number")
                    message.validUntil = object.validUntil;
                else if (typeof object.validUntil === "object")
                    message.validUntil = new $util.LongBits(object.validUntil.low >>> 0, object.validUntil.high >>> 0).toNumber();
            if (object.quantityFilled != null)
                message.quantityFilled = Number(object.quantityFilled);
            if (object.quantityRemaining != null)
                message.quantityRemaining = Number(object.quantityRemaining);
            if (object.criteria != null) {
                if (typeof object.criteria !== "object")
                    throw TypeError(".reservoir.Ask.criteria: object expected");
                message.criteria = $root.reservoir.Criteria.fromObject(object.criteria);
            }
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".reservoir.Ask.source: object expected");
                message.source = $root.reservoir.Source.fromObject(object.source);
            }
            if (object.feeBps != null)
                message.feeBps = object.feeBps | 0;
            if (object.feeBreakdown) {
                if (!Array.isArray(object.feeBreakdown))
                    throw TypeError(".reservoir.Ask.feeBreakdown: array expected");
                message.feeBreakdown = [];
                for (var i = 0; i < object.feeBreakdown.length; ++i) {
                    if (typeof object.feeBreakdown[i] !== "object")
                        throw TypeError(".reservoir.Ask.feeBreakdown: object expected");
                    message.feeBreakdown[i] = $root.reservoir.FeeBreakdown.fromObject(object.feeBreakdown[i]);
                }
            }
            if (object.expiration != null)
                if ($util.Long)
                    (message.expiration = $util.Long.fromValue(object.expiration)).unsigned = false;
                else if (typeof object.expiration === "string")
                    message.expiration = parseInt(object.expiration, 10);
                else if (typeof object.expiration === "number")
                    message.expiration = object.expiration;
                else if (typeof object.expiration === "object")
                    message.expiration = new $util.LongBits(object.expiration.low >>> 0, object.expiration.high >>> 0).toNumber();
            if (object.isReservoir != null)
                message.isReservoir = Boolean(object.isReservoir);
            if (object.isDynamic != null)
                message.isDynamic = Boolean(object.isDynamic);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            switch (object.chain) {
            default:
                if (typeof object.chain === "number") {
                    message.chain = object.chain;
                    break;
                }
                break;
            case "MAINNET":
            case 0:
                message.chain = 0;
                break;
            case "POLYGON":
            case 1:
                message.chain = 1;
                break;
            case "ARBITRUM":
            case 2:
                message.chain = 2;
                break;
            case "MUMBAI":
            case 3:
                message.chain = 3;
                break;
            case "OPTIMISM":
            case 4:
                message.chain = 4;
                break;
            case "SEPOLIA":
            case 5:
                message.chain = 5;
                break;
            case "BASE":
            case 6:
                message.chain = 6;
                break;
            case "ZORA":
            case 7:
                message.chain = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an Ask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Ask
         * @static
         * @param {reservoir.Ask} message Ask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.feeBreakdown = [];
            if (options.defaults) {
                object.id = "";
                object.kind = "";
                object.side = "";
                object.status = "";
                object.tokenSetId = "";
                object.tokenSetSchemaHash = "";
                object.contract = "";
                object.maker = "";
                object.taker = "";
                object.price = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.validFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.validFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.validUntil = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.validUntil = options.longs === String ? "0" : 0;
                object.quantityFilled = 0;
                object.quantityRemaining = 0;
                object.criteria = null;
                object.source = null;
                object.feeBps = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expiration = options.longs === String ? "0" : 0;
                object.isReservoir = false;
                object.isDynamic = false;
                object.createdAt = "";
                object.updatedAt = "";
                object.chain = options.enums === String ? "MAINNET" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = message.side;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.tokenSetId != null && message.hasOwnProperty("tokenSetId"))
                object.tokenSetId = message.tokenSetId;
            if (message.tokenSetSchemaHash != null && message.hasOwnProperty("tokenSetSchemaHash"))
                object.tokenSetSchemaHash = message.tokenSetSchemaHash;
            if (message.contract != null && message.hasOwnProperty("contract"))
                object.contract = message.contract;
            if (message.maker != null && message.hasOwnProperty("maker"))
                object.maker = message.maker;
            if (message.taker != null && message.hasOwnProperty("taker"))
                object.taker = message.taker;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = $root.reservoir.Price.toObject(message.price, options);
            if (message.validFrom != null && message.hasOwnProperty("validFrom"))
                if (typeof message.validFrom === "number")
                    object.validFrom = options.longs === String ? String(message.validFrom) : message.validFrom;
                else
                    object.validFrom = options.longs === String ? $util.Long.prototype.toString.call(message.validFrom) : options.longs === Number ? new $util.LongBits(message.validFrom.low >>> 0, message.validFrom.high >>> 0).toNumber() : message.validFrom;
            if (message.validUntil != null && message.hasOwnProperty("validUntil"))
                if (typeof message.validUntil === "number")
                    object.validUntil = options.longs === String ? String(message.validUntil) : message.validUntil;
                else
                    object.validUntil = options.longs === String ? $util.Long.prototype.toString.call(message.validUntil) : options.longs === Number ? new $util.LongBits(message.validUntil.low >>> 0, message.validUntil.high >>> 0).toNumber() : message.validUntil;
            if (message.quantityFilled != null && message.hasOwnProperty("quantityFilled"))
                object.quantityFilled = options.json && !isFinite(message.quantityFilled) ? String(message.quantityFilled) : message.quantityFilled;
            if (message.quantityRemaining != null && message.hasOwnProperty("quantityRemaining"))
                object.quantityRemaining = options.json && !isFinite(message.quantityRemaining) ? String(message.quantityRemaining) : message.quantityRemaining;
            if (message.criteria != null && message.hasOwnProperty("criteria"))
                object.criteria = $root.reservoir.Criteria.toObject(message.criteria, options);
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = $root.reservoir.Source.toObject(message.source, options);
            if (message.feeBps != null && message.hasOwnProperty("feeBps"))
                object.feeBps = message.feeBps;
            if (message.feeBreakdown && message.feeBreakdown.length) {
                object.feeBreakdown = [];
                for (var j = 0; j < message.feeBreakdown.length; ++j)
                    object.feeBreakdown[j] = $root.reservoir.FeeBreakdown.toObject(message.feeBreakdown[j], options);
            }
            if (message.expiration != null && message.hasOwnProperty("expiration"))
                if (typeof message.expiration === "number")
                    object.expiration = options.longs === String ? String(message.expiration) : message.expiration;
                else
                    object.expiration = options.longs === String ? $util.Long.prototype.toString.call(message.expiration) : options.longs === Number ? new $util.LongBits(message.expiration.low >>> 0, message.expiration.high >>> 0).toNumber() : message.expiration;
            if (message.isReservoir != null && message.hasOwnProperty("isReservoir"))
                object.isReservoir = message.isReservoir;
            if (message.isDynamic != null && message.hasOwnProperty("isDynamic"))
                object.isDynamic = message.isDynamic;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.chain != null && message.hasOwnProperty("chain"))
                object.chain = options.enums === String ? $root.reservoir.Chain[message.chain] === undefined ? message.chain : $root.reservoir.Chain[message.chain] : message.chain;
            return object;
        };

        /**
         * Converts this Ask to JSON.
         * @function toJSON
         * @memberof reservoir.Ask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ask
         * @function getTypeUrl
         * @memberof reservoir.Ask
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Ask";
        };

        return Ask;
    })();

    reservoir.Bid = (function() {

        /**
         * Properties of a Bid.
         * @memberof reservoir
         * @interface IBid
         * @property {string|null} [id] Bid id
         * @property {string|null} [kind] Bid kind
         * @property {string|null} [side] Bid side
         * @property {string|null} [status] Bid status
         * @property {string|null} [tokenSetId] Bid tokenSetId
         * @property {string|null} [tokenSetSchemaHash] Bid tokenSetSchemaHash
         * @property {string|null} [contract] Bid contract
         * @property {string|null} [maker] Bid maker
         * @property {string|null} [taker] Bid taker
         * @property {reservoir.IPrice|null} [price] Bid price
         * @property {number|Long|null} [validFrom] Bid validFrom
         * @property {number|Long|null} [validUntil] Bid validUntil
         * @property {number|null} [quantityFilled] Bid quantityFilled
         * @property {number|null} [quantityRemaining] Bid quantityRemaining
         * @property {reservoir.ICriteria|null} [criteria] Bid criteria
         * @property {reservoir.ISource|null} [source] Bid source
         * @property {number|null} [feeBps] Bid feeBps
         * @property {Array.<reservoir.IFeeBreakdown>|null} [feeBreakdown] Bid feeBreakdown
         * @property {number|Long|null} [expiration] Bid expiration
         * @property {boolean|null} [isReservoir] Bid isReservoir
         * @property {boolean|null} [isDynamic] Bid isDynamic
         * @property {string|null} [createdAt] Bid createdAt
         * @property {string|null} [updatedAt] Bid updatedAt
         * @property {reservoir.Chain|null} [chain] Bid chain
         */

        /**
         * Constructs a new Bid.
         * @memberof reservoir
         * @classdesc Represents a Bid.
         * @implements IBid
         * @constructor
         * @param {reservoir.IBid=} [properties] Properties to set
         */
        function Bid(properties) {
            this.feeBreakdown = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bid id.
         * @member {string} id
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.id = "";

        /**
         * Bid kind.
         * @member {string} kind
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.kind = "";

        /**
         * Bid side.
         * @member {string} side
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.side = "";

        /**
         * Bid status.
         * @member {string} status
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.status = "";

        /**
         * Bid tokenSetId.
         * @member {string} tokenSetId
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.tokenSetId = "";

        /**
         * Bid tokenSetSchemaHash.
         * @member {string} tokenSetSchemaHash
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.tokenSetSchemaHash = "";

        /**
         * Bid contract.
         * @member {string} contract
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.contract = "";

        /**
         * Bid maker.
         * @member {string} maker
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.maker = "";

        /**
         * Bid taker.
         * @member {string} taker
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.taker = "";

        /**
         * Bid price.
         * @member {reservoir.IPrice|null|undefined} price
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.price = null;

        /**
         * Bid validFrom.
         * @member {number|Long} validFrom
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.validFrom = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bid validUntil.
         * @member {number|Long} validUntil
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.validUntil = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bid quantityFilled.
         * @member {number} quantityFilled
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.quantityFilled = 0;

        /**
         * Bid quantityRemaining.
         * @member {number} quantityRemaining
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.quantityRemaining = 0;

        /**
         * Bid criteria.
         * @member {reservoir.ICriteria|null|undefined} criteria
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.criteria = null;

        /**
         * Bid source.
         * @member {reservoir.ISource|null|undefined} source
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.source = null;

        /**
         * Bid feeBps.
         * @member {number} feeBps
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.feeBps = 0;

        /**
         * Bid feeBreakdown.
         * @member {Array.<reservoir.IFeeBreakdown>} feeBreakdown
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.feeBreakdown = $util.emptyArray;

        /**
         * Bid expiration.
         * @member {number|Long} expiration
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.expiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bid isReservoir.
         * @member {boolean} isReservoir
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.isReservoir = false;

        /**
         * Bid isDynamic.
         * @member {boolean} isDynamic
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.isDynamic = false;

        /**
         * Bid createdAt.
         * @member {string} createdAt
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.createdAt = "";

        /**
         * Bid updatedAt.
         * @member {string} updatedAt
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.updatedAt = "";

        /**
         * Bid chain.
         * @member {reservoir.Chain} chain
         * @memberof reservoir.Bid
         * @instance
         */
        Bid.prototype.chain = 0;

        /**
         * Creates a new Bid instance using the specified properties.
         * @function create
         * @memberof reservoir.Bid
         * @static
         * @param {reservoir.IBid=} [properties] Properties to set
         * @returns {reservoir.Bid} Bid instance
         */
        Bid.create = function create(properties) {
            return new Bid(properties);
        };

        /**
         * Encodes the specified Bid message. Does not implicitly {@link reservoir.Bid.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Bid
         * @static
         * @param {reservoir.IBid} message Bid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kind);
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.side);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
            if (message.tokenSetId != null && Object.hasOwnProperty.call(message, "tokenSetId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tokenSetId);
            if (message.tokenSetSchemaHash != null && Object.hasOwnProperty.call(message, "tokenSetSchemaHash"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tokenSetSchemaHash);
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.contract);
            if (message.maker != null && Object.hasOwnProperty.call(message, "maker"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.maker);
            if (message.taker != null && Object.hasOwnProperty.call(message, "taker"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.taker);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                $root.reservoir.Price.encode(message.price, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.validFrom != null && Object.hasOwnProperty.call(message, "validFrom"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.validFrom);
            if (message.validUntil != null && Object.hasOwnProperty.call(message, "validUntil"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.validUntil);
            if (message.quantityFilled != null && Object.hasOwnProperty.call(message, "quantityFilled"))
                writer.uint32(/* id 13, wireType 1 =*/105).double(message.quantityFilled);
            if (message.quantityRemaining != null && Object.hasOwnProperty.call(message, "quantityRemaining"))
                writer.uint32(/* id 14, wireType 1 =*/113).double(message.quantityRemaining);
            if (message.criteria != null && Object.hasOwnProperty.call(message, "criteria"))
                $root.reservoir.Criteria.encode(message.criteria, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                $root.reservoir.Source.encode(message.source, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.feeBps != null && Object.hasOwnProperty.call(message, "feeBps"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.feeBps);
            if (message.feeBreakdown != null && message.feeBreakdown.length)
                for (var i = 0; i < message.feeBreakdown.length; ++i)
                    $root.reservoir.FeeBreakdown.encode(message.feeBreakdown[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.expiration != null && Object.hasOwnProperty.call(message, "expiration"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.expiration);
            if (message.isReservoir != null && Object.hasOwnProperty.call(message, "isReservoir"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.isReservoir);
            if (message.isDynamic != null && Object.hasOwnProperty.call(message, "isDynamic"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.isDynamic);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.updatedAt);
            if (message.chain != null && Object.hasOwnProperty.call(message, "chain"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.chain);
            return writer;
        };

        /**
         * Encodes the specified Bid message, length delimited. Does not implicitly {@link reservoir.Bid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Bid
         * @static
         * @param {reservoir.IBid} message Bid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bid message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Bid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Bid} Bid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Bid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.kind = reader.string();
                        break;
                    }
                case 3: {
                        message.side = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.string();
                        break;
                    }
                case 5: {
                        message.tokenSetId = reader.string();
                        break;
                    }
                case 6: {
                        message.tokenSetSchemaHash = reader.string();
                        break;
                    }
                case 7: {
                        message.contract = reader.string();
                        break;
                    }
                case 8: {
                        message.maker = reader.string();
                        break;
                    }
                case 9: {
                        message.taker = reader.string();
                        break;
                    }
                case 10: {
                        message.price = $root.reservoir.Price.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.validFrom = reader.int64();
                        break;
                    }
                case 12: {
                        message.validUntil = reader.int64();
                        break;
                    }
                case 13: {
                        message.quantityFilled = reader.double();
                        break;
                    }
                case 14: {
                        message.quantityRemaining = reader.double();
                        break;
                    }
                case 15: {
                        message.criteria = $root.reservoir.Criteria.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.source = $root.reservoir.Source.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.feeBps = reader.int32();
                        break;
                    }
                case 18: {
                        if (!(message.feeBreakdown && message.feeBreakdown.length))
                            message.feeBreakdown = [];
                        message.feeBreakdown.push($root.reservoir.FeeBreakdown.decode(reader, reader.uint32()));
                        break;
                    }
                case 19: {
                        message.expiration = reader.int64();
                        break;
                    }
                case 20: {
                        message.isReservoir = reader.bool();
                        break;
                    }
                case 21: {
                        message.isDynamic = reader.bool();
                        break;
                    }
                case 22: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 23: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 24: {
                        message.chain = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Bid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Bid} Bid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bid message.
         * @function verify
         * @memberof reservoir.Bid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                if (!$util.isString(message.side))
                    return "side: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.tokenSetId != null && message.hasOwnProperty("tokenSetId"))
                if (!$util.isString(message.tokenSetId))
                    return "tokenSetId: string expected";
            if (message.tokenSetSchemaHash != null && message.hasOwnProperty("tokenSetSchemaHash"))
                if (!$util.isString(message.tokenSetSchemaHash))
                    return "tokenSetSchemaHash: string expected";
            if (message.contract != null && message.hasOwnProperty("contract"))
                if (!$util.isString(message.contract))
                    return "contract: string expected";
            if (message.maker != null && message.hasOwnProperty("maker"))
                if (!$util.isString(message.maker))
                    return "maker: string expected";
            if (message.taker != null && message.hasOwnProperty("taker"))
                if (!$util.isString(message.taker))
                    return "taker: string expected";
            if (message.price != null && message.hasOwnProperty("price")) {
                var error = $root.reservoir.Price.verify(message.price);
                if (error)
                    return "price." + error;
            }
            if (message.validFrom != null && message.hasOwnProperty("validFrom"))
                if (!$util.isInteger(message.validFrom) && !(message.validFrom && $util.isInteger(message.validFrom.low) && $util.isInteger(message.validFrom.high)))
                    return "validFrom: integer|Long expected";
            if (message.validUntil != null && message.hasOwnProperty("validUntil"))
                if (!$util.isInteger(message.validUntil) && !(message.validUntil && $util.isInteger(message.validUntil.low) && $util.isInteger(message.validUntil.high)))
                    return "validUntil: integer|Long expected";
            if (message.quantityFilled != null && message.hasOwnProperty("quantityFilled"))
                if (typeof message.quantityFilled !== "number")
                    return "quantityFilled: number expected";
            if (message.quantityRemaining != null && message.hasOwnProperty("quantityRemaining"))
                if (typeof message.quantityRemaining !== "number")
                    return "quantityRemaining: number expected";
            if (message.criteria != null && message.hasOwnProperty("criteria")) {
                var error = $root.reservoir.Criteria.verify(message.criteria);
                if (error)
                    return "criteria." + error;
            }
            if (message.source != null && message.hasOwnProperty("source")) {
                var error = $root.reservoir.Source.verify(message.source);
                if (error)
                    return "source." + error;
            }
            if (message.feeBps != null && message.hasOwnProperty("feeBps"))
                if (!$util.isInteger(message.feeBps))
                    return "feeBps: integer expected";
            if (message.feeBreakdown != null && message.hasOwnProperty("feeBreakdown")) {
                if (!Array.isArray(message.feeBreakdown))
                    return "feeBreakdown: array expected";
                for (var i = 0; i < message.feeBreakdown.length; ++i) {
                    var error = $root.reservoir.FeeBreakdown.verify(message.feeBreakdown[i]);
                    if (error)
                        return "feeBreakdown." + error;
                }
            }
            if (message.expiration != null && message.hasOwnProperty("expiration"))
                if (!$util.isInteger(message.expiration) && !(message.expiration && $util.isInteger(message.expiration.low) && $util.isInteger(message.expiration.high)))
                    return "expiration: integer|Long expected";
            if (message.isReservoir != null && message.hasOwnProperty("isReservoir"))
                if (typeof message.isReservoir !== "boolean")
                    return "isReservoir: boolean expected";
            if (message.isDynamic != null && message.hasOwnProperty("isDynamic"))
                if (typeof message.isDynamic !== "boolean")
                    return "isDynamic: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                switch (message.chain) {
                default:
                    return "chain: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a Bid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Bid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Bid} Bid
         */
        Bid.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Bid)
                return object;
            var message = new $root.reservoir.Bid();
            if (object.id != null)
                message.id = String(object.id);
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.side != null)
                message.side = String(object.side);
            if (object.status != null)
                message.status = String(object.status);
            if (object.tokenSetId != null)
                message.tokenSetId = String(object.tokenSetId);
            if (object.tokenSetSchemaHash != null)
                message.tokenSetSchemaHash = String(object.tokenSetSchemaHash);
            if (object.contract != null)
                message.contract = String(object.contract);
            if (object.maker != null)
                message.maker = String(object.maker);
            if (object.taker != null)
                message.taker = String(object.taker);
            if (object.price != null) {
                if (typeof object.price !== "object")
                    throw TypeError(".reservoir.Bid.price: object expected");
                message.price = $root.reservoir.Price.fromObject(object.price);
            }
            if (object.validFrom != null)
                if ($util.Long)
                    (message.validFrom = $util.Long.fromValue(object.validFrom)).unsigned = false;
                else if (typeof object.validFrom === "string")
                    message.validFrom = parseInt(object.validFrom, 10);
                else if (typeof object.validFrom === "number")
                    message.validFrom = object.validFrom;
                else if (typeof object.validFrom === "object")
                    message.validFrom = new $util.LongBits(object.validFrom.low >>> 0, object.validFrom.high >>> 0).toNumber();
            if (object.validUntil != null)
                if ($util.Long)
                    (message.validUntil = $util.Long.fromValue(object.validUntil)).unsigned = false;
                else if (typeof object.validUntil === "string")
                    message.validUntil = parseInt(object.validUntil, 10);
                else if (typeof object.validUntil === "number")
                    message.validUntil = object.validUntil;
                else if (typeof object.validUntil === "object")
                    message.validUntil = new $util.LongBits(object.validUntil.low >>> 0, object.validUntil.high >>> 0).toNumber();
            if (object.quantityFilled != null)
                message.quantityFilled = Number(object.quantityFilled);
            if (object.quantityRemaining != null)
                message.quantityRemaining = Number(object.quantityRemaining);
            if (object.criteria != null) {
                if (typeof object.criteria !== "object")
                    throw TypeError(".reservoir.Bid.criteria: object expected");
                message.criteria = $root.reservoir.Criteria.fromObject(object.criteria);
            }
            if (object.source != null) {
                if (typeof object.source !== "object")
                    throw TypeError(".reservoir.Bid.source: object expected");
                message.source = $root.reservoir.Source.fromObject(object.source);
            }
            if (object.feeBps != null)
                message.feeBps = object.feeBps | 0;
            if (object.feeBreakdown) {
                if (!Array.isArray(object.feeBreakdown))
                    throw TypeError(".reservoir.Bid.feeBreakdown: array expected");
                message.feeBreakdown = [];
                for (var i = 0; i < object.feeBreakdown.length; ++i) {
                    if (typeof object.feeBreakdown[i] !== "object")
                        throw TypeError(".reservoir.Bid.feeBreakdown: object expected");
                    message.feeBreakdown[i] = $root.reservoir.FeeBreakdown.fromObject(object.feeBreakdown[i]);
                }
            }
            if (object.expiration != null)
                if ($util.Long)
                    (message.expiration = $util.Long.fromValue(object.expiration)).unsigned = false;
                else if (typeof object.expiration === "string")
                    message.expiration = parseInt(object.expiration, 10);
                else if (typeof object.expiration === "number")
                    message.expiration = object.expiration;
                else if (typeof object.expiration === "object")
                    message.expiration = new $util.LongBits(object.expiration.low >>> 0, object.expiration.high >>> 0).toNumber();
            if (object.isReservoir != null)
                message.isReservoir = Boolean(object.isReservoir);
            if (object.isDynamic != null)
                message.isDynamic = Boolean(object.isDynamic);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            switch (object.chain) {
            default:
                if (typeof object.chain === "number") {
                    message.chain = object.chain;
                    break;
                }
                break;
            case "MAINNET":
            case 0:
                message.chain = 0;
                break;
            case "POLYGON":
            case 1:
                message.chain = 1;
                break;
            case "ARBITRUM":
            case 2:
                message.chain = 2;
                break;
            case "MUMBAI":
            case 3:
                message.chain = 3;
                break;
            case "OPTIMISM":
            case 4:
                message.chain = 4;
                break;
            case "SEPOLIA":
            case 5:
                message.chain = 5;
                break;
            case "BASE":
            case 6:
                message.chain = 6;
                break;
            case "ZORA":
            case 7:
                message.chain = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Bid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Bid
         * @static
         * @param {reservoir.Bid} message Bid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bid.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.feeBreakdown = [];
            if (options.defaults) {
                object.id = "";
                object.kind = "";
                object.side = "";
                object.status = "";
                object.tokenSetId = "";
                object.tokenSetSchemaHash = "";
                object.contract = "";
                object.maker = "";
                object.taker = "";
                object.price = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.validFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.validFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.validUntil = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.validUntil = options.longs === String ? "0" : 0;
                object.quantityFilled = 0;
                object.quantityRemaining = 0;
                object.criteria = null;
                object.source = null;
                object.feeBps = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.expiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expiration = options.longs === String ? "0" : 0;
                object.isReservoir = false;
                object.isDynamic = false;
                object.createdAt = "";
                object.updatedAt = "";
                object.chain = options.enums === String ? "MAINNET" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = message.side;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.tokenSetId != null && message.hasOwnProperty("tokenSetId"))
                object.tokenSetId = message.tokenSetId;
            if (message.tokenSetSchemaHash != null && message.hasOwnProperty("tokenSetSchemaHash"))
                object.tokenSetSchemaHash = message.tokenSetSchemaHash;
            if (message.contract != null && message.hasOwnProperty("contract"))
                object.contract = message.contract;
            if (message.maker != null && message.hasOwnProperty("maker"))
                object.maker = message.maker;
            if (message.taker != null && message.hasOwnProperty("taker"))
                object.taker = message.taker;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = $root.reservoir.Price.toObject(message.price, options);
            if (message.validFrom != null && message.hasOwnProperty("validFrom"))
                if (typeof message.validFrom === "number")
                    object.validFrom = options.longs === String ? String(message.validFrom) : message.validFrom;
                else
                    object.validFrom = options.longs === String ? $util.Long.prototype.toString.call(message.validFrom) : options.longs === Number ? new $util.LongBits(message.validFrom.low >>> 0, message.validFrom.high >>> 0).toNumber() : message.validFrom;
            if (message.validUntil != null && message.hasOwnProperty("validUntil"))
                if (typeof message.validUntil === "number")
                    object.validUntil = options.longs === String ? String(message.validUntil) : message.validUntil;
                else
                    object.validUntil = options.longs === String ? $util.Long.prototype.toString.call(message.validUntil) : options.longs === Number ? new $util.LongBits(message.validUntil.low >>> 0, message.validUntil.high >>> 0).toNumber() : message.validUntil;
            if (message.quantityFilled != null && message.hasOwnProperty("quantityFilled"))
                object.quantityFilled = options.json && !isFinite(message.quantityFilled) ? String(message.quantityFilled) : message.quantityFilled;
            if (message.quantityRemaining != null && message.hasOwnProperty("quantityRemaining"))
                object.quantityRemaining = options.json && !isFinite(message.quantityRemaining) ? String(message.quantityRemaining) : message.quantityRemaining;
            if (message.criteria != null && message.hasOwnProperty("criteria"))
                object.criteria = $root.reservoir.Criteria.toObject(message.criteria, options);
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = $root.reservoir.Source.toObject(message.source, options);
            if (message.feeBps != null && message.hasOwnProperty("feeBps"))
                object.feeBps = message.feeBps;
            if (message.feeBreakdown && message.feeBreakdown.length) {
                object.feeBreakdown = [];
                for (var j = 0; j < message.feeBreakdown.length; ++j)
                    object.feeBreakdown[j] = $root.reservoir.FeeBreakdown.toObject(message.feeBreakdown[j], options);
            }
            if (message.expiration != null && message.hasOwnProperty("expiration"))
                if (typeof message.expiration === "number")
                    object.expiration = options.longs === String ? String(message.expiration) : message.expiration;
                else
                    object.expiration = options.longs === String ? $util.Long.prototype.toString.call(message.expiration) : options.longs === Number ? new $util.LongBits(message.expiration.low >>> 0, message.expiration.high >>> 0).toNumber() : message.expiration;
            if (message.isReservoir != null && message.hasOwnProperty("isReservoir"))
                object.isReservoir = message.isReservoir;
            if (message.isDynamic != null && message.hasOwnProperty("isDynamic"))
                object.isDynamic = message.isDynamic;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.chain != null && message.hasOwnProperty("chain"))
                object.chain = options.enums === String ? $root.reservoir.Chain[message.chain] === undefined ? message.chain : $root.reservoir.Chain[message.chain] : message.chain;
            return object;
        };

        /**
         * Converts this Bid to JSON.
         * @function toJSON
         * @memberof reservoir.Bid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Bid
         * @function getTypeUrl
         * @memberof reservoir.Bid
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Bid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Bid";
        };

        return Bid;
    })();

    reservoir.Transfer = (function() {

        /**
         * Properties of a Transfer.
         * @memberof reservoir
         * @interface ITransfer
         * @property {string|null} [id] Transfer id
         * @property {reservoir.IToken|null} [token] Transfer token
         * @property {string|null} [from] Transfer from
         * @property {string|null} [to] Transfer to
         * @property {string|null} [amount] Transfer amount
         * @property {number|Long|null} [block] Transfer block
         * @property {string|null} [txHash] Transfer txHash
         * @property {number|null} [logIndex] Transfer logIndex
         * @property {number|null} [batchIndex] Transfer batchIndex
         * @property {number|Long|null} [timestamp] Transfer timestamp
         * @property {boolean|null} [isDeleted] Transfer isDeleted
         * @property {string|null} [createdAt] Transfer createdAt
         * @property {string|null} [updatedAt] Transfer updatedAt
         * @property {reservoir.Chain|null} [chain] Transfer chain
         */

        /**
         * Constructs a new Transfer.
         * @memberof reservoir
         * @classdesc Represents a Transfer.
         * @implements ITransfer
         * @constructor
         * @param {reservoir.ITransfer=} [properties] Properties to set
         */
        function Transfer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transfer id.
         * @member {string} id
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.id = "";

        /**
         * Transfer token.
         * @member {reservoir.IToken|null|undefined} token
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.token = null;

        /**
         * Transfer from.
         * @member {string} from
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.from = "";

        /**
         * Transfer to.
         * @member {string} to
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.to = "";

        /**
         * Transfer amount.
         * @member {string} amount
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.amount = "";

        /**
         * Transfer block.
         * @member {number|Long} block
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.block = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transfer txHash.
         * @member {string} txHash
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.txHash = "";

        /**
         * Transfer logIndex.
         * @member {number} logIndex
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.logIndex = 0;

        /**
         * Transfer batchIndex.
         * @member {number} batchIndex
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.batchIndex = 0;

        /**
         * Transfer timestamp.
         * @member {number|Long} timestamp
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transfer isDeleted.
         * @member {boolean} isDeleted
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.isDeleted = false;

        /**
         * Transfer createdAt.
         * @member {string} createdAt
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.createdAt = "";

        /**
         * Transfer updatedAt.
         * @member {string} updatedAt
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.updatedAt = "";

        /**
         * Transfer chain.
         * @member {reservoir.Chain} chain
         * @memberof reservoir.Transfer
         * @instance
         */
        Transfer.prototype.chain = 0;

        /**
         * Creates a new Transfer instance using the specified properties.
         * @function create
         * @memberof reservoir.Transfer
         * @static
         * @param {reservoir.ITransfer=} [properties] Properties to set
         * @returns {reservoir.Transfer} Transfer instance
         */
        Transfer.create = function create(properties) {
            return new Transfer(properties);
        };

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link reservoir.Transfer.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Transfer
         * @static
         * @param {reservoir.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                $root.reservoir.Token.encode(message.token, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.to);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.amount);
            if (message.block != null && Object.hasOwnProperty.call(message, "block"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.block);
            if (message.txHash != null && Object.hasOwnProperty.call(message, "txHash"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.txHash);
            if (message.logIndex != null && Object.hasOwnProperty.call(message, "logIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.logIndex);
            if (message.batchIndex != null && Object.hasOwnProperty.call(message, "batchIndex"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.batchIndex);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.timestamp);
            if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isDeleted);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.updatedAt);
            if (message.chain != null && Object.hasOwnProperty.call(message, "chain"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.chain);
            return writer;
        };

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link reservoir.Transfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Transfer
         * @static
         * @param {reservoir.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Transfer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.token = $root.reservoir.Token.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.from = reader.string();
                        break;
                    }
                case 4: {
                        message.to = reader.string();
                        break;
                    }
                case 5: {
                        message.amount = reader.string();
                        break;
                    }
                case 6: {
                        message.block = reader.int64();
                        break;
                    }
                case 7: {
                        message.txHash = reader.string();
                        break;
                    }
                case 8: {
                        message.logIndex = reader.int32();
                        break;
                    }
                case 9: {
                        message.batchIndex = reader.int32();
                        break;
                    }
                case 10: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 11: {
                        message.isDeleted = reader.bool();
                        break;
                    }
                case 12: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 13: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 14: {
                        message.chain = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transfer message.
         * @function verify
         * @memberof reservoir.Transfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.token != null && message.hasOwnProperty("token")) {
                var error = $root.reservoir.Token.verify(message.token);
                if (error)
                    return "token." + error;
            }
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isString(message.amount))
                    return "amount: string expected";
            if (message.block != null && message.hasOwnProperty("block"))
                if (!$util.isInteger(message.block) && !(message.block && $util.isInteger(message.block.low) && $util.isInteger(message.block.high)))
                    return "block: integer|Long expected";
            if (message.txHash != null && message.hasOwnProperty("txHash"))
                if (!$util.isString(message.txHash))
                    return "txHash: string expected";
            if (message.logIndex != null && message.hasOwnProperty("logIndex"))
                if (!$util.isInteger(message.logIndex))
                    return "logIndex: integer expected";
            if (message.batchIndex != null && message.hasOwnProperty("batchIndex"))
                if (!$util.isInteger(message.batchIndex))
                    return "batchIndex: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                if (typeof message.isDeleted !== "boolean")
                    return "isDeleted: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                switch (message.chain) {
                default:
                    return "chain: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Transfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Transfer} Transfer
         */
        Transfer.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Transfer)
                return object;
            var message = new $root.reservoir.Transfer();
            if (object.id != null)
                message.id = String(object.id);
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".reservoir.Transfer.token: object expected");
                message.token = $root.reservoir.Token.fromObject(object.token);
            }
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.amount != null)
                message.amount = String(object.amount);
            if (object.block != null)
                if ($util.Long)
                    (message.block = $util.Long.fromValue(object.block)).unsigned = false;
                else if (typeof object.block === "string")
                    message.block = parseInt(object.block, 10);
                else if (typeof object.block === "number")
                    message.block = object.block;
                else if (typeof object.block === "object")
                    message.block = new $util.LongBits(object.block.low >>> 0, object.block.high >>> 0).toNumber();
            if (object.txHash != null)
                message.txHash = String(object.txHash);
            if (object.logIndex != null)
                message.logIndex = object.logIndex | 0;
            if (object.batchIndex != null)
                message.batchIndex = object.batchIndex | 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.isDeleted != null)
                message.isDeleted = Boolean(object.isDeleted);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            switch (object.chain) {
            default:
                if (typeof object.chain === "number") {
                    message.chain = object.chain;
                    break;
                }
                break;
            case "MAINNET":
            case 0:
                message.chain = 0;
                break;
            case "POLYGON":
            case 1:
                message.chain = 1;
                break;
            case "ARBITRUM":
            case 2:
                message.chain = 2;
                break;
            case "MUMBAI":
            case 3:
                message.chain = 3;
                break;
            case "OPTIMISM":
            case 4:
                message.chain = 4;
                break;
            case "SEPOLIA":
            case 5:
                message.chain = 5;
                break;
            case "BASE":
            case 6:
                message.chain = 6;
                break;
            case "ZORA":
            case 7:
                message.chain = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Transfer
         * @static
         * @param {reservoir.Transfer} message Transfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.token = null;
                object.from = "";
                object.to = "";
                object.amount = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.block = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.block = options.longs === String ? "0" : 0;
                object.txHash = "";
                object.logIndex = 0;
                object.batchIndex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.isDeleted = false;
                object.createdAt = "";
                object.updatedAt = "";
                object.chain = options.enums === String ? "MAINNET" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = $root.reservoir.Token.toObject(message.token, options);
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.block != null && message.hasOwnProperty("block"))
                if (typeof message.block === "number")
                    object.block = options.longs === String ? String(message.block) : message.block;
                else
                    object.block = options.longs === String ? $util.Long.prototype.toString.call(message.block) : options.longs === Number ? new $util.LongBits(message.block.low >>> 0, message.block.high >>> 0).toNumber() : message.block;
            if (message.txHash != null && message.hasOwnProperty("txHash"))
                object.txHash = message.txHash;
            if (message.logIndex != null && message.hasOwnProperty("logIndex"))
                object.logIndex = message.logIndex;
            if (message.batchIndex != null && message.hasOwnProperty("batchIndex"))
                object.batchIndex = message.batchIndex;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                object.isDeleted = message.isDeleted;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.chain != null && message.hasOwnProperty("chain"))
                object.chain = options.enums === String ? $root.reservoir.Chain[message.chain] === undefined ? message.chain : $root.reservoir.Chain[message.chain] : message.chain;
            return object;
        };

        /**
         * Converts this Transfer to JSON.
         * @function toJSON
         * @memberof reservoir.Transfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transfer
         * @function getTypeUrl
         * @memberof reservoir.Transfer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transfer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Transfer";
        };

        return Transfer;
    })();

    reservoir.Collection = (function() {

        /**
         * Properties of a Collection.
         * @memberof reservoir
         * @interface ICollection
         * @property {string|null} [id] Collection id
         * @property {string|null} [name] Collection name
         */

        /**
         * Constructs a new Collection.
         * @memberof reservoir
         * @classdesc Represents a Collection.
         * @implements ICollection
         * @constructor
         * @param {reservoir.ICollection=} [properties] Properties to set
         */
        function Collection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Collection id.
         * @member {string} id
         * @memberof reservoir.Collection
         * @instance
         */
        Collection.prototype.id = "";

        /**
         * Collection name.
         * @member {string} name
         * @memberof reservoir.Collection
         * @instance
         */
        Collection.prototype.name = "";

        /**
         * Creates a new Collection instance using the specified properties.
         * @function create
         * @memberof reservoir.Collection
         * @static
         * @param {reservoir.ICollection=} [properties] Properties to set
         * @returns {reservoir.Collection} Collection instance
         */
        Collection.create = function create(properties) {
            return new Collection(properties);
        };

        /**
         * Encodes the specified Collection message. Does not implicitly {@link reservoir.Collection.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Collection
         * @static
         * @param {reservoir.ICollection} message Collection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Collection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Collection message, length delimited. Does not implicitly {@link reservoir.Collection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Collection
         * @static
         * @param {reservoir.ICollection} message Collection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Collection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Collection message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Collection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Collection} Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Collection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Collection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Collection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Collection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Collection} Collection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Collection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Collection message.
         * @function verify
         * @memberof reservoir.Collection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Collection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Collection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Collection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Collection} Collection
         */
        Collection.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Collection)
                return object;
            var message = new $root.reservoir.Collection();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Collection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Collection
         * @static
         * @param {reservoir.Collection} message Collection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Collection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Collection to JSON.
         * @function toJSON
         * @memberof reservoir.Collection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Collection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Collection
         * @function getTypeUrl
         * @memberof reservoir.Collection
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Collection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Collection";
        };

        return Collection;
    })();

    reservoir.Token = (function() {

        /**
         * Properties of a Token.
         * @memberof reservoir
         * @interface IToken
         * @property {string|null} [contract] Token contract
         * @property {string|null} [tokenId] Token tokenId
         * @property {string|null} [name] Token name
         * @property {string|null} [image] Token image
         * @property {reservoir.ICollection|null} [collection] Token collection
         */

        /**
         * Constructs a new Token.
         * @memberof reservoir
         * @classdesc Represents a Token.
         * @implements IToken
         * @constructor
         * @param {reservoir.IToken=} [properties] Properties to set
         */
        function Token(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Token contract.
         * @member {string} contract
         * @memberof reservoir.Token
         * @instance
         */
        Token.prototype.contract = "";

        /**
         * Token tokenId.
         * @member {string} tokenId
         * @memberof reservoir.Token
         * @instance
         */
        Token.prototype.tokenId = "";

        /**
         * Token name.
         * @member {string|null|undefined} name
         * @memberof reservoir.Token
         * @instance
         */
        Token.prototype.name = null;

        /**
         * Token image.
         * @member {string|null|undefined} image
         * @memberof reservoir.Token
         * @instance
         */
        Token.prototype.image = null;

        /**
         * Token collection.
         * @member {reservoir.ICollection|null|undefined} collection
         * @memberof reservoir.Token
         * @instance
         */
        Token.prototype.collection = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Token.prototype, "_name", {
            get: $util.oneOfGetter($oneOfFields = ["name"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Token.prototype, "_image", {
            get: $util.oneOfGetter($oneOfFields = ["image"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Token.prototype, "_collection", {
            get: $util.oneOfGetter($oneOfFields = ["collection"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Token instance using the specified properties.
         * @function create
         * @memberof reservoir.Token
         * @static
         * @param {reservoir.IToken=} [properties] Properties to set
         * @returns {reservoir.Token} Token instance
         */
        Token.create = function create(properties) {
            return new Token(properties);
        };

        /**
         * Encodes the specified Token message. Does not implicitly {@link reservoir.Token.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Token
         * @static
         * @param {reservoir.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.contract);
            if (message.tokenId != null && Object.hasOwnProperty.call(message, "tokenId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tokenId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.image);
            if (message.collection != null && Object.hasOwnProperty.call(message, "collection"))
                $root.reservoir.Collection.encode(message.collection, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Token message, length delimited. Does not implicitly {@link reservoir.Token.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Token
         * @static
         * @param {reservoir.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Token message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Token();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.contract = reader.string();
                        break;
                    }
                case 2: {
                        message.tokenId = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.image = reader.string();
                        break;
                    }
                case 5: {
                        message.collection = $root.reservoir.Collection.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Token message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Token message.
         * @function verify
         * @memberof reservoir.Token
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Token.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.contract != null && message.hasOwnProperty("contract"))
                if (!$util.isString(message.contract))
                    return "contract: string expected";
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                if (!$util.isString(message.tokenId))
                    return "tokenId: string expected";
            if (message.name != null && message.hasOwnProperty("name")) {
                properties._name = 1;
                if (!$util.isString(message.name))
                    return "name: string expected";
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                properties._image = 1;
                if (!$util.isString(message.image))
                    return "image: string expected";
            }
            if (message.collection != null && message.hasOwnProperty("collection")) {
                properties._collection = 1;
                {
                    var error = $root.reservoir.Collection.verify(message.collection);
                    if (error)
                        return "collection." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Token message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Token
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Token} Token
         */
        Token.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Token)
                return object;
            var message = new $root.reservoir.Token();
            if (object.contract != null)
                message.contract = String(object.contract);
            if (object.tokenId != null)
                message.tokenId = String(object.tokenId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.image != null)
                message.image = String(object.image);
            if (object.collection != null) {
                if (typeof object.collection !== "object")
                    throw TypeError(".reservoir.Token.collection: object expected");
                message.collection = $root.reservoir.Collection.fromObject(object.collection);
            }
            return message;
        };

        /**
         * Creates a plain object from a Token message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Token
         * @static
         * @param {reservoir.Token} message Token
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Token.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.contract = "";
                object.tokenId = "";
            }
            if (message.contract != null && message.hasOwnProperty("contract"))
                object.contract = message.contract;
            if (message.tokenId != null && message.hasOwnProperty("tokenId"))
                object.tokenId = message.tokenId;
            if (message.name != null && message.hasOwnProperty("name")) {
                object.name = message.name;
                if (options.oneofs)
                    object._name = "name";
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                object.image = message.image;
                if (options.oneofs)
                    object._image = "image";
            }
            if (message.collection != null && message.hasOwnProperty("collection")) {
                object.collection = $root.reservoir.Collection.toObject(message.collection, options);
                if (options.oneofs)
                    object._collection = "collection";
            }
            return object;
        };

        /**
         * Converts this Token to JSON.
         * @function toJSON
         * @memberof reservoir.Token
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Token.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Token
         * @function getTypeUrl
         * @memberof reservoir.Token
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Token.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Token";
        };

        return Token;
    })();

    reservoir.Sale = (function() {

        /**
         * Properties of a Sale.
         * @memberof reservoir
         * @interface ISale
         * @property {string|null} [id] Sale id
         * @property {string|null} [saleId] Sale saleId
         * @property {reservoir.IToken|null} [token] Sale token
         * @property {string|null} [orderId] Sale orderId
         * @property {string|null} [orderSource] Sale orderSource
         * @property {string|null} [orderSide] Sale orderSide
         * @property {string|null} [orderKind] Sale orderKind
         * @property {string|null} [from] Sale from
         * @property {string|null} [to] Sale to
         * @property {string|null} [amount] Sale amount
         * @property {string|null} [fillSource] Sale fillSource
         * @property {number|Long|null} [block] Sale block
         * @property {string|null} [txHash] Sale txHash
         * @property {number|null} [logIndex] Sale logIndex
         * @property {number|null} [batchIndex] Sale batchIndex
         * @property {number|Long|null} [timestamp] Sale timestamp
         * @property {reservoir.IPrice|null} [price] Sale price
         * @property {number|null} [washTradingScore] Sale washTradingScore
         * @property {string|null} [createdAt] Sale createdAt
         * @property {string|null} [updatedAt] Sale updatedAt
         * @property {boolean|null} [isDeleted] Sale isDeleted
         * @property {reservoir.Chain|null} [chain] Sale chain
         */

        /**
         * Constructs a new Sale.
         * @memberof reservoir
         * @classdesc Represents a Sale.
         * @implements ISale
         * @constructor
         * @param {reservoir.ISale=} [properties] Properties to set
         */
        function Sale(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sale id.
         * @member {string} id
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.id = "";

        /**
         * Sale saleId.
         * @member {string} saleId
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.saleId = "";

        /**
         * Sale token.
         * @member {reservoir.IToken|null|undefined} token
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.token = null;

        /**
         * Sale orderId.
         * @member {string} orderId
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.orderId = "";

        /**
         * Sale orderSource.
         * @member {string} orderSource
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.orderSource = "";

        /**
         * Sale orderSide.
         * @member {string} orderSide
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.orderSide = "";

        /**
         * Sale orderKind.
         * @member {string} orderKind
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.orderKind = "";

        /**
         * Sale from.
         * @member {string} from
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.from = "";

        /**
         * Sale to.
         * @member {string} to
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.to = "";

        /**
         * Sale amount.
         * @member {string} amount
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.amount = "";

        /**
         * Sale fillSource.
         * @member {string} fillSource
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.fillSource = "";

        /**
         * Sale block.
         * @member {number|Long} block
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.block = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Sale txHash.
         * @member {string} txHash
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.txHash = "";

        /**
         * Sale logIndex.
         * @member {number} logIndex
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.logIndex = 0;

        /**
         * Sale batchIndex.
         * @member {number} batchIndex
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.batchIndex = 0;

        /**
         * Sale timestamp.
         * @member {number|Long} timestamp
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Sale price.
         * @member {reservoir.IPrice|null|undefined} price
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.price = null;

        /**
         * Sale washTradingScore.
         * @member {number} washTradingScore
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.washTradingScore = 0;

        /**
         * Sale createdAt.
         * @member {string} createdAt
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.createdAt = "";

        /**
         * Sale updatedAt.
         * @member {string} updatedAt
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.updatedAt = "";

        /**
         * Sale isDeleted.
         * @member {boolean} isDeleted
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.isDeleted = false;

        /**
         * Sale chain.
         * @member {reservoir.Chain} chain
         * @memberof reservoir.Sale
         * @instance
         */
        Sale.prototype.chain = 0;

        /**
         * Creates a new Sale instance using the specified properties.
         * @function create
         * @memberof reservoir.Sale
         * @static
         * @param {reservoir.ISale=} [properties] Properties to set
         * @returns {reservoir.Sale} Sale instance
         */
        Sale.create = function create(properties) {
            return new Sale(properties);
        };

        /**
         * Encodes the specified Sale message. Does not implicitly {@link reservoir.Sale.verify|verify} messages.
         * @function encode
         * @memberof reservoir.Sale
         * @static
         * @param {reservoir.ISale} message Sale message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sale.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.saleId != null && Object.hasOwnProperty.call(message, "saleId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.saleId);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                $root.reservoir.Token.encode(message.token, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.orderId);
            if (message.orderSource != null && Object.hasOwnProperty.call(message, "orderSource"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.orderSource);
            if (message.orderSide != null && Object.hasOwnProperty.call(message, "orderSide"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.orderSide);
            if (message.orderKind != null && Object.hasOwnProperty.call(message, "orderKind"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.orderKind);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.to);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.amount);
            if (message.fillSource != null && Object.hasOwnProperty.call(message, "fillSource"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.fillSource);
            if (message.block != null && Object.hasOwnProperty.call(message, "block"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.block);
            if (message.txHash != null && Object.hasOwnProperty.call(message, "txHash"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.txHash);
            if (message.logIndex != null && Object.hasOwnProperty.call(message, "logIndex"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.logIndex);
            if (message.batchIndex != null && Object.hasOwnProperty.call(message, "batchIndex"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.batchIndex);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.timestamp);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                $root.reservoir.Price.encode(message.price, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.washTradingScore != null && Object.hasOwnProperty.call(message, "washTradingScore"))
                writer.uint32(/* id 18, wireType 1 =*/145).double(message.washTradingScore);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.updatedAt);
            if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.isDeleted);
            if (message.chain != null && Object.hasOwnProperty.call(message, "chain"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.chain);
            return writer;
        };

        /**
         * Encodes the specified Sale message, length delimited. Does not implicitly {@link reservoir.Sale.verify|verify} messages.
         * @function encodeDelimited
         * @memberof reservoir.Sale
         * @static
         * @param {reservoir.ISale} message Sale message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sale.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sale message from the specified reader or buffer.
         * @function decode
         * @memberof reservoir.Sale
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {reservoir.Sale} Sale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sale.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.reservoir.Sale();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.saleId = reader.string();
                        break;
                    }
                case 3: {
                        message.token = $root.reservoir.Token.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.orderId = reader.string();
                        break;
                    }
                case 5: {
                        message.orderSource = reader.string();
                        break;
                    }
                case 6: {
                        message.orderSide = reader.string();
                        break;
                    }
                case 7: {
                        message.orderKind = reader.string();
                        break;
                    }
                case 8: {
                        message.from = reader.string();
                        break;
                    }
                case 9: {
                        message.to = reader.string();
                        break;
                    }
                case 10: {
                        message.amount = reader.string();
                        break;
                    }
                case 11: {
                        message.fillSource = reader.string();
                        break;
                    }
                case 12: {
                        message.block = reader.int64();
                        break;
                    }
                case 13: {
                        message.txHash = reader.string();
                        break;
                    }
                case 14: {
                        message.logIndex = reader.int32();
                        break;
                    }
                case 15: {
                        message.batchIndex = reader.int32();
                        break;
                    }
                case 16: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 17: {
                        message.price = $root.reservoir.Price.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.washTradingScore = reader.double();
                        break;
                    }
                case 19: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 20: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 21: {
                        message.isDeleted = reader.bool();
                        break;
                    }
                case 22: {
                        message.chain = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sale message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof reservoir.Sale
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {reservoir.Sale} Sale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sale.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sale message.
         * @function verify
         * @memberof reservoir.Sale
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sale.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.saleId != null && message.hasOwnProperty("saleId"))
                if (!$util.isString(message.saleId))
                    return "saleId: string expected";
            if (message.token != null && message.hasOwnProperty("token")) {
                var error = $root.reservoir.Token.verify(message.token);
                if (error)
                    return "token." + error;
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isString(message.orderId))
                    return "orderId: string expected";
            if (message.orderSource != null && message.hasOwnProperty("orderSource"))
                if (!$util.isString(message.orderSource))
                    return "orderSource: string expected";
            if (message.orderSide != null && message.hasOwnProperty("orderSide"))
                if (!$util.isString(message.orderSide))
                    return "orderSide: string expected";
            if (message.orderKind != null && message.hasOwnProperty("orderKind"))
                if (!$util.isString(message.orderKind))
                    return "orderKind: string expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isString(message.amount))
                    return "amount: string expected";
            if (message.fillSource != null && message.hasOwnProperty("fillSource"))
                if (!$util.isString(message.fillSource))
                    return "fillSource: string expected";
            if (message.block != null && message.hasOwnProperty("block"))
                if (!$util.isInteger(message.block) && !(message.block && $util.isInteger(message.block.low) && $util.isInteger(message.block.high)))
                    return "block: integer|Long expected";
            if (message.txHash != null && message.hasOwnProperty("txHash"))
                if (!$util.isString(message.txHash))
                    return "txHash: string expected";
            if (message.logIndex != null && message.hasOwnProperty("logIndex"))
                if (!$util.isInteger(message.logIndex))
                    return "logIndex: integer expected";
            if (message.batchIndex != null && message.hasOwnProperty("batchIndex"))
                if (!$util.isInteger(message.batchIndex))
                    return "batchIndex: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.price != null && message.hasOwnProperty("price")) {
                var error = $root.reservoir.Price.verify(message.price);
                if (error)
                    return "price." + error;
            }
            if (message.washTradingScore != null && message.hasOwnProperty("washTradingScore"))
                if (typeof message.washTradingScore !== "number")
                    return "washTradingScore: number expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                if (typeof message.isDeleted !== "boolean")
                    return "isDeleted: boolean expected";
            if (message.chain != null && message.hasOwnProperty("chain"))
                switch (message.chain) {
                default:
                    return "chain: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a Sale message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof reservoir.Sale
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {reservoir.Sale} Sale
         */
        Sale.fromObject = function fromObject(object) {
            if (object instanceof $root.reservoir.Sale)
                return object;
            var message = new $root.reservoir.Sale();
            if (object.id != null)
                message.id = String(object.id);
            if (object.saleId != null)
                message.saleId = String(object.saleId);
            if (object.token != null) {
                if (typeof object.token !== "object")
                    throw TypeError(".reservoir.Sale.token: object expected");
                message.token = $root.reservoir.Token.fromObject(object.token);
            }
            if (object.orderId != null)
                message.orderId = String(object.orderId);
            if (object.orderSource != null)
                message.orderSource = String(object.orderSource);
            if (object.orderSide != null)
                message.orderSide = String(object.orderSide);
            if (object.orderKind != null)
                message.orderKind = String(object.orderKind);
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.amount != null)
                message.amount = String(object.amount);
            if (object.fillSource != null)
                message.fillSource = String(object.fillSource);
            if (object.block != null)
                if ($util.Long)
                    (message.block = $util.Long.fromValue(object.block)).unsigned = false;
                else if (typeof object.block === "string")
                    message.block = parseInt(object.block, 10);
                else if (typeof object.block === "number")
                    message.block = object.block;
                else if (typeof object.block === "object")
                    message.block = new $util.LongBits(object.block.low >>> 0, object.block.high >>> 0).toNumber();
            if (object.txHash != null)
                message.txHash = String(object.txHash);
            if (object.logIndex != null)
                message.logIndex = object.logIndex | 0;
            if (object.batchIndex != null)
                message.batchIndex = object.batchIndex | 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.price != null) {
                if (typeof object.price !== "object")
                    throw TypeError(".reservoir.Sale.price: object expected");
                message.price = $root.reservoir.Price.fromObject(object.price);
            }
            if (object.washTradingScore != null)
                message.washTradingScore = Number(object.washTradingScore);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.isDeleted != null)
                message.isDeleted = Boolean(object.isDeleted);
            switch (object.chain) {
            default:
                if (typeof object.chain === "number") {
                    message.chain = object.chain;
                    break;
                }
                break;
            case "MAINNET":
            case 0:
                message.chain = 0;
                break;
            case "POLYGON":
            case 1:
                message.chain = 1;
                break;
            case "ARBITRUM":
            case 2:
                message.chain = 2;
                break;
            case "MUMBAI":
            case 3:
                message.chain = 3;
                break;
            case "OPTIMISM":
            case 4:
                message.chain = 4;
                break;
            case "SEPOLIA":
            case 5:
                message.chain = 5;
                break;
            case "BASE":
            case 6:
                message.chain = 6;
                break;
            case "ZORA":
            case 7:
                message.chain = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Sale message. Also converts values to other types if specified.
         * @function toObject
         * @memberof reservoir.Sale
         * @static
         * @param {reservoir.Sale} message Sale
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sale.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.saleId = "";
                object.token = null;
                object.orderId = "";
                object.orderSource = "";
                object.orderSide = "";
                object.orderKind = "";
                object.from = "";
                object.to = "";
                object.amount = "";
                object.fillSource = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.block = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.block = options.longs === String ? "0" : 0;
                object.txHash = "";
                object.logIndex = 0;
                object.batchIndex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.price = null;
                object.washTradingScore = 0;
                object.createdAt = "";
                object.updatedAt = "";
                object.isDeleted = false;
                object.chain = options.enums === String ? "MAINNET" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.saleId != null && message.hasOwnProperty("saleId"))
                object.saleId = message.saleId;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = $root.reservoir.Token.toObject(message.token, options);
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                object.orderId = message.orderId;
            if (message.orderSource != null && message.hasOwnProperty("orderSource"))
                object.orderSource = message.orderSource;
            if (message.orderSide != null && message.hasOwnProperty("orderSide"))
                object.orderSide = message.orderSide;
            if (message.orderKind != null && message.hasOwnProperty("orderKind"))
                object.orderKind = message.orderKind;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.fillSource != null && message.hasOwnProperty("fillSource"))
                object.fillSource = message.fillSource;
            if (message.block != null && message.hasOwnProperty("block"))
                if (typeof message.block === "number")
                    object.block = options.longs === String ? String(message.block) : message.block;
                else
                    object.block = options.longs === String ? $util.Long.prototype.toString.call(message.block) : options.longs === Number ? new $util.LongBits(message.block.low >>> 0, message.block.high >>> 0).toNumber() : message.block;
            if (message.txHash != null && message.hasOwnProperty("txHash"))
                object.txHash = message.txHash;
            if (message.logIndex != null && message.hasOwnProperty("logIndex"))
                object.logIndex = message.logIndex;
            if (message.batchIndex != null && message.hasOwnProperty("batchIndex"))
                object.batchIndex = message.batchIndex;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = $root.reservoir.Price.toObject(message.price, options);
            if (message.washTradingScore != null && message.hasOwnProperty("washTradingScore"))
                object.washTradingScore = options.json && !isFinite(message.washTradingScore) ? String(message.washTradingScore) : message.washTradingScore;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.isDeleted != null && message.hasOwnProperty("isDeleted"))
                object.isDeleted = message.isDeleted;
            if (message.chain != null && message.hasOwnProperty("chain"))
                object.chain = options.enums === String ? $root.reservoir.Chain[message.chain] === undefined ? message.chain : $root.reservoir.Chain[message.chain] : message.chain;
            return object;
        };

        /**
         * Converts this Sale to JSON.
         * @function toJSON
         * @memberof reservoir.Sale
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sale.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Sale
         * @function getTypeUrl
         * @memberof reservoir.Sale
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Sale.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/reservoir.Sale";
        };

        return Sale;
    })();

    return reservoir;
})();

module.exports = $root;
