import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace talent. */
        namespace talent {

            /** Namespace v4beta1. */
            namespace v4beta1 {

                /** Represents an ApplicationService */
                class ApplicationService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ApplicationService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ApplicationService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ApplicationService;

                    /**
                     * Calls CreateApplication.
                     * @param request CreateApplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Application
                     */
                    public createApplication(request: google.cloud.talent.v4beta1.ICreateApplicationRequest, callback: google.cloud.talent.v4beta1.ApplicationService.CreateApplicationCallback): void;

                    /**
                     * Calls CreateApplication.
                     * @param request CreateApplicationRequest message or plain object
                     * @returns Promise
                     */
                    public createApplication(request: google.cloud.talent.v4beta1.ICreateApplicationRequest): Promise<google.cloud.talent.v4beta1.Application>;

                    /**
                     * Calls GetApplication.
                     * @param request GetApplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Application
                     */
                    public getApplication(request: google.cloud.talent.v4beta1.IGetApplicationRequest, callback: google.cloud.talent.v4beta1.ApplicationService.GetApplicationCallback): void;

                    /**
                     * Calls GetApplication.
                     * @param request GetApplicationRequest message or plain object
                     * @returns Promise
                     */
                    public getApplication(request: google.cloud.talent.v4beta1.IGetApplicationRequest): Promise<google.cloud.talent.v4beta1.Application>;

                    /**
                     * Calls UpdateApplication.
                     * @param request UpdateApplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Application
                     */
                    public updateApplication(request: google.cloud.talent.v4beta1.IUpdateApplicationRequest, callback: google.cloud.talent.v4beta1.ApplicationService.UpdateApplicationCallback): void;

                    /**
                     * Calls UpdateApplication.
                     * @param request UpdateApplicationRequest message or plain object
                     * @returns Promise
                     */
                    public updateApplication(request: google.cloud.talent.v4beta1.IUpdateApplicationRequest): Promise<google.cloud.talent.v4beta1.Application>;

                    /**
                     * Calls DeleteApplication.
                     * @param request DeleteApplicationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteApplication(request: google.cloud.talent.v4beta1.IDeleteApplicationRequest, callback: google.cloud.talent.v4beta1.ApplicationService.DeleteApplicationCallback): void;

                    /**
                     * Calls DeleteApplication.
                     * @param request DeleteApplicationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApplication(request: google.cloud.talent.v4beta1.IDeleteApplicationRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListApplications.
                     * @param request ListApplicationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApplicationsResponse
                     */
                    public listApplications(request: google.cloud.talent.v4beta1.IListApplicationsRequest, callback: google.cloud.talent.v4beta1.ApplicationService.ListApplicationsCallback): void;

                    /**
                     * Calls ListApplications.
                     * @param request ListApplicationsRequest message or plain object
                     * @returns Promise
                     */
                    public listApplications(request: google.cloud.talent.v4beta1.IListApplicationsRequest): Promise<google.cloud.talent.v4beta1.ListApplicationsResponse>;
                }

                namespace ApplicationService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ApplicationService#createApplication}.
                     * @param error Error, if any
                     * @param [response] Application
                     */
                    type CreateApplicationCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Application) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ApplicationService#getApplication}.
                     * @param error Error, if any
                     * @param [response] Application
                     */
                    type GetApplicationCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Application) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ApplicationService#updateApplication}.
                     * @param error Error, if any
                     * @param [response] Application
                     */
                    type UpdateApplicationCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Application) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ApplicationService#deleteApplication}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteApplicationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ApplicationService#listApplications}.
                     * @param error Error, if any
                     * @param [response] ListApplicationsResponse
                     */
                    type ListApplicationsCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ListApplicationsResponse) => void;
                }

                /** Properties of a CreateApplicationRequest. */
                interface ICreateApplicationRequest {

                    /** CreateApplicationRequest parent */
                    parent?: (string|null);

                    /** CreateApplicationRequest application */
                    application?: (google.cloud.talent.v4beta1.IApplication|null);
                }

                /** Represents a CreateApplicationRequest. */
                class CreateApplicationRequest implements ICreateApplicationRequest {

                    /**
                     * Constructs a new CreateApplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateApplicationRequest);

                    /** CreateApplicationRequest parent. */
                    public parent: string;

                    /** CreateApplicationRequest application. */
                    public application?: (google.cloud.talent.v4beta1.IApplication|null);

                    /**
                     * Creates a new CreateApplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateApplicationRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateApplicationRequest): google.cloud.talent.v4beta1.CreateApplicationRequest;

                    /**
                     * Encodes the specified CreateApplicationRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateApplicationRequest.verify|verify} messages.
                     * @param message CreateApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateApplicationRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateApplicationRequest.verify|verify} messages.
                     * @param message CreateApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateApplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateApplicationRequest;

                    /**
                     * Decodes a CreateApplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateApplicationRequest;

                    /**
                     * Verifies a CreateApplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateApplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateApplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateApplicationRequest;

                    /**
                     * Creates a plain object from a CreateApplicationRequest message. Also converts values to other types if specified.
                     * @param message CreateApplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateApplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetApplicationRequest. */
                interface IGetApplicationRequest {

                    /** GetApplicationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApplicationRequest. */
                class GetApplicationRequest implements IGetApplicationRequest {

                    /**
                     * Constructs a new GetApplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IGetApplicationRequest);

                    /** GetApplicationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApplicationRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IGetApplicationRequest): google.cloud.talent.v4beta1.GetApplicationRequest;

                    /**
                     * Encodes the specified GetApplicationRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.GetApplicationRequest.verify|verify} messages.
                     * @param message GetApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IGetApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApplicationRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.GetApplicationRequest.verify|verify} messages.
                     * @param message GetApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IGetApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.GetApplicationRequest;

                    /**
                     * Decodes a GetApplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.GetApplicationRequest;

                    /**
                     * Verifies a GetApplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.GetApplicationRequest;

                    /**
                     * Creates a plain object from a GetApplicationRequest message. Also converts values to other types if specified.
                     * @param message GetApplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.GetApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateApplicationRequest. */
                interface IUpdateApplicationRequest {

                    /** UpdateApplicationRequest application */
                    application?: (google.cloud.talent.v4beta1.IApplication|null);

                    /** UpdateApplicationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateApplicationRequest. */
                class UpdateApplicationRequest implements IUpdateApplicationRequest {

                    /**
                     * Constructs a new UpdateApplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IUpdateApplicationRequest);

                    /** UpdateApplicationRequest application. */
                    public application?: (google.cloud.talent.v4beta1.IApplication|null);

                    /** UpdateApplicationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateApplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateApplicationRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IUpdateApplicationRequest): google.cloud.talent.v4beta1.UpdateApplicationRequest;

                    /**
                     * Encodes the specified UpdateApplicationRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateApplicationRequest.verify|verify} messages.
                     * @param message UpdateApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IUpdateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateApplicationRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateApplicationRequest.verify|verify} messages.
                     * @param message UpdateApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IUpdateApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateApplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.UpdateApplicationRequest;

                    /**
                     * Decodes an UpdateApplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.UpdateApplicationRequest;

                    /**
                     * Verifies an UpdateApplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateApplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateApplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.UpdateApplicationRequest;

                    /**
                     * Creates a plain object from an UpdateApplicationRequest message. Also converts values to other types if specified.
                     * @param message UpdateApplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.UpdateApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateApplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteApplicationRequest. */
                interface IDeleteApplicationRequest {

                    /** DeleteApplicationRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteApplicationRequest. */
                class DeleteApplicationRequest implements IDeleteApplicationRequest {

                    /**
                     * Constructs a new DeleteApplicationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeleteApplicationRequest);

                    /** DeleteApplicationRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteApplicationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApplicationRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeleteApplicationRequest): google.cloud.talent.v4beta1.DeleteApplicationRequest;

                    /**
                     * Encodes the specified DeleteApplicationRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteApplicationRequest.verify|verify} messages.
                     * @param message DeleteApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeleteApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApplicationRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteApplicationRequest.verify|verify} messages.
                     * @param message DeleteApplicationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeleteApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApplicationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeleteApplicationRequest;

                    /**
                     * Decodes a DeleteApplicationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApplicationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeleteApplicationRequest;

                    /**
                     * Verifies a DeleteApplicationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApplicationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApplicationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeleteApplicationRequest;

                    /**
                     * Creates a plain object from a DeleteApplicationRequest message. Also converts values to other types if specified.
                     * @param message DeleteApplicationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeleteApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApplicationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListApplicationsRequest. */
                interface IListApplicationsRequest {

                    /** ListApplicationsRequest parent */
                    parent?: (string|null);

                    /** ListApplicationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListApplicationsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListApplicationsRequest. */
                class ListApplicationsRequest implements IListApplicationsRequest {

                    /**
                     * Constructs a new ListApplicationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListApplicationsRequest);

                    /** ListApplicationsRequest parent. */
                    public parent: string;

                    /** ListApplicationsRequest pageToken. */
                    public pageToken: string;

                    /** ListApplicationsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListApplicationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApplicationsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListApplicationsRequest): google.cloud.talent.v4beta1.ListApplicationsRequest;

                    /**
                     * Encodes the specified ListApplicationsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.ListApplicationsRequest.verify|verify} messages.
                     * @param message ListApplicationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListApplicationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApplicationsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListApplicationsRequest.verify|verify} messages.
                     * @param message ListApplicationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListApplicationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApplicationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApplicationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListApplicationsRequest;

                    /**
                     * Decodes a ListApplicationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApplicationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListApplicationsRequest;

                    /**
                     * Verifies a ListApplicationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApplicationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApplicationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListApplicationsRequest;

                    /**
                     * Creates a plain object from a ListApplicationsRequest message. Also converts values to other types if specified.
                     * @param message ListApplicationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListApplicationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApplicationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListApplicationsResponse. */
                interface IListApplicationsResponse {

                    /** ListApplicationsResponse applications */
                    applications?: (google.cloud.talent.v4beta1.IApplication[]|null);

                    /** ListApplicationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListApplicationsResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);
                }

                /** Represents a ListApplicationsResponse. */
                class ListApplicationsResponse implements IListApplicationsResponse {

                    /**
                     * Constructs a new ListApplicationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListApplicationsResponse);

                    /** ListApplicationsResponse applications. */
                    public applications: google.cloud.talent.v4beta1.IApplication[];

                    /** ListApplicationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListApplicationsResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /**
                     * Creates a new ListApplicationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApplicationsResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListApplicationsResponse): google.cloud.talent.v4beta1.ListApplicationsResponse;

                    /**
                     * Encodes the specified ListApplicationsResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.ListApplicationsResponse.verify|verify} messages.
                     * @param message ListApplicationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListApplicationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApplicationsResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListApplicationsResponse.verify|verify} messages.
                     * @param message ListApplicationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListApplicationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApplicationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApplicationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListApplicationsResponse;

                    /**
                     * Decodes a ListApplicationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApplicationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListApplicationsResponse;

                    /**
                     * Verifies a ListApplicationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApplicationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApplicationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListApplicationsResponse;

                    /**
                     * Creates a plain object from a ListApplicationsResponse message. Also converts values to other types if specified.
                     * @param message ListApplicationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListApplicationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApplicationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Application. */
                interface IApplication {

                    /** Application name */
                    name?: (string|null);

                    /** Application externalId */
                    externalId?: (string|null);

                    /** Application profile */
                    profile?: (string|null);

                    /** Application job */
                    job?: (string|null);

                    /** Application company */
                    company?: (string|null);

                    /** Application applicationDate */
                    applicationDate?: (google.type.IDate|null);

                    /** Application stage */
                    stage?: (google.cloud.talent.v4beta1.Application.ApplicationStage|null);

                    /** Application state */
                    state?: (google.cloud.talent.v4beta1.Application.ApplicationState|null);

                    /** Application interviews */
                    interviews?: (google.cloud.talent.v4beta1.IInterview[]|null);

                    /** Application referral */
                    referral?: (google.protobuf.IBoolValue|null);

                    /** Application createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Application updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Application outcomeNotes */
                    outcomeNotes?: (string|null);

                    /** Application outcome */
                    outcome?: (google.cloud.talent.v4beta1.Outcome|null);

                    /** Application isMatch */
                    isMatch?: (google.protobuf.IBoolValue|null);

                    /** Application jobTitleSnippet */
                    jobTitleSnippet?: (string|null);
                }

                /** Represents an Application. */
                class Application implements IApplication {

                    /**
                     * Constructs a new Application.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IApplication);

                    /** Application name. */
                    public name: string;

                    /** Application externalId. */
                    public externalId: string;

                    /** Application profile. */
                    public profile: string;

                    /** Application job. */
                    public job: string;

                    /** Application company. */
                    public company: string;

                    /** Application applicationDate. */
                    public applicationDate?: (google.type.IDate|null);

                    /** Application stage. */
                    public stage: google.cloud.talent.v4beta1.Application.ApplicationStage;

                    /** Application state. */
                    public state: google.cloud.talent.v4beta1.Application.ApplicationState;

                    /** Application interviews. */
                    public interviews: google.cloud.talent.v4beta1.IInterview[];

                    /** Application referral. */
                    public referral?: (google.protobuf.IBoolValue|null);

                    /** Application createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Application updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Application outcomeNotes. */
                    public outcomeNotes: string;

                    /** Application outcome. */
                    public outcome: google.cloud.talent.v4beta1.Outcome;

                    /** Application isMatch. */
                    public isMatch?: (google.protobuf.IBoolValue|null);

                    /** Application jobTitleSnippet. */
                    public jobTitleSnippet: string;

                    /**
                     * Creates a new Application instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Application instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IApplication): google.cloud.talent.v4beta1.Application;

                    /**
                     * Encodes the specified Application message. Does not implicitly {@link google.cloud.talent.v4beta1.Application.verify|verify} messages.
                     * @param message Application message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Application message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Application.verify|verify} messages.
                     * @param message Application message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Application message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Application
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Application;

                    /**
                     * Decodes an Application message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Application
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Application;

                    /**
                     * Verifies an Application message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Application message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Application
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Application;

                    /**
                     * Creates a plain object from an Application message. Also converts values to other types if specified.
                     * @param message Application
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Application, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Application to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Application {

                    /** ApplicationState enum. */
                    enum ApplicationState {
                        APPLICATION_STATE_UNSPECIFIED = 0,
                        IN_PROGRESS = 1,
                        CANDIDATE_WITHDREW = 2,
                        EMPLOYER_WITHDREW = 3,
                        COMPLETED = 4,
                        CLOSED = 5
                    }

                    /** ApplicationStage enum. */
                    enum ApplicationStage {
                        APPLICATION_STAGE_UNSPECIFIED = 0,
                        NEW = 1,
                        SCREEN = 2,
                        HIRING_MANAGER_REVIEW = 3,
                        INTERVIEW = 4,
                        OFFER_EXTENDED = 5,
                        OFFER_ACCEPTED = 6,
                        STARTED = 7
                    }
                }

                /** Properties of a TimestampRange. */
                interface ITimestampRange {

                    /** TimestampRange startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimestampRange endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TimestampRange. */
                class TimestampRange implements ITimestampRange {

                    /**
                     * Constructs a new TimestampRange.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ITimestampRange);

                    /** TimestampRange startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimestampRange endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimestampRange instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimestampRange instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ITimestampRange): google.cloud.talent.v4beta1.TimestampRange;

                    /**
                     * Encodes the specified TimestampRange message. Does not implicitly {@link google.cloud.talent.v4beta1.TimestampRange.verify|verify} messages.
                     * @param message TimestampRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ITimestampRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimestampRange message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.TimestampRange.verify|verify} messages.
                     * @param message TimestampRange message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ITimestampRange, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimestampRange message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimestampRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.TimestampRange;

                    /**
                     * Decodes a TimestampRange message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimestampRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.TimestampRange;

                    /**
                     * Verifies a TimestampRange message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimestampRange message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimestampRange
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.TimestampRange;

                    /**
                     * Creates a plain object from a TimestampRange message. Also converts values to other types if specified.
                     * @param message TimestampRange
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.TimestampRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimestampRange to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Location. */
                interface ILocation {

                    /** Location locationType */
                    locationType?: (google.cloud.talent.v4beta1.Location.LocationType|null);

                    /** Location postalAddress */
                    postalAddress?: (google.type.IPostalAddress|null);

                    /** Location latLng */
                    latLng?: (google.type.ILatLng|null);

                    /** Location radiusMiles */
                    radiusMiles?: (number|null);
                }

                /** Represents a Location. */
                class Location implements ILocation {

                    /**
                     * Constructs a new Location.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ILocation);

                    /** Location locationType. */
                    public locationType: google.cloud.talent.v4beta1.Location.LocationType;

                    /** Location postalAddress. */
                    public postalAddress?: (google.type.IPostalAddress|null);

                    /** Location latLng. */
                    public latLng?: (google.type.ILatLng|null);

                    /** Location radiusMiles. */
                    public radiusMiles: number;

                    /**
                     * Creates a new Location instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Location instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ILocation): google.cloud.talent.v4beta1.Location;

                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.cloud.talent.v4beta1.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Location;

                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Location;

                    /**
                     * Verifies a Location message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Location
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Location;

                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @param message Location
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Location to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Location {

                    /** LocationType enum. */
                    enum LocationType {
                        LOCATION_TYPE_UNSPECIFIED = 0,
                        COUNTRY = 1,
                        ADMINISTRATIVE_AREA = 2,
                        SUB_ADMINISTRATIVE_AREA = 3,
                        LOCALITY = 4,
                        POSTAL_CODE = 5,
                        SUB_LOCALITY = 6,
                        SUB_LOCALITY_1 = 7,
                        SUB_LOCALITY_2 = 8,
                        NEIGHBORHOOD = 9,
                        STREET_ADDRESS = 10
                    }
                }

                /** CompanySize enum. */
                enum CompanySize {
                    COMPANY_SIZE_UNSPECIFIED = 0,
                    MINI = 1,
                    SMALL = 2,
                    SMEDIUM = 3,
                    MEDIUM = 4,
                    BIG = 5,
                    BIGGER = 6,
                    GIANT = 7
                }

                /** JobBenefit enum. */
                enum JobBenefit {
                    JOB_BENEFIT_UNSPECIFIED = 0,
                    CHILD_CARE = 1,
                    DENTAL = 2,
                    DOMESTIC_PARTNER = 3,
                    FLEXIBLE_HOURS = 4,
                    MEDICAL = 5,
                    LIFE_INSURANCE = 6,
                    PARENTAL_LEAVE = 7,
                    RETIREMENT_PLAN = 8,
                    SICK_DAYS = 9,
                    VACATION = 10,
                    VISION = 11
                }

                /** DegreeType enum. */
                enum DegreeType {
                    DEGREE_TYPE_UNSPECIFIED = 0,
                    PRIMARY_EDUCATION = 1,
                    LOWER_SECONDARY_EDUCATION = 2,
                    UPPER_SECONDARY_EDUCATION = 3,
                    ADULT_REMEDIAL_EDUCATION = 4,
                    ASSOCIATES_OR_EQUIVALENT = 5,
                    BACHELORS_OR_EQUIVALENT = 6,
                    MASTERS_OR_EQUIVALENT = 7,
                    DOCTORAL_OR_EQUIVALENT = 8
                }

                /** EmploymentType enum. */
                enum EmploymentType {
                    EMPLOYMENT_TYPE_UNSPECIFIED = 0,
                    FULL_TIME = 1,
                    PART_TIME = 2,
                    CONTRACTOR = 3,
                    CONTRACT_TO_HIRE = 4,
                    TEMPORARY = 5,
                    INTERN = 6,
                    VOLUNTEER = 7,
                    PER_DIEM = 8,
                    FLY_IN_FLY_OUT = 9,
                    OTHER_EMPLOYMENT_TYPE = 10
                }

                /** JobLevel enum. */
                enum JobLevel {
                    JOB_LEVEL_UNSPECIFIED = 0,
                    ENTRY_LEVEL = 1,
                    EXPERIENCED = 2,
                    MANAGER = 3,
                    DIRECTOR = 4,
                    EXECUTIVE = 5
                }

                /** JobCategory enum. */
                enum JobCategory {
                    JOB_CATEGORY_UNSPECIFIED = 0,
                    ACCOUNTING_AND_FINANCE = 1,
                    ADMINISTRATIVE_AND_OFFICE = 2,
                    ADVERTISING_AND_MARKETING = 3,
                    ANIMAL_CARE = 4,
                    ART_FASHION_AND_DESIGN = 5,
                    BUSINESS_OPERATIONS = 6,
                    CLEANING_AND_FACILITIES = 7,
                    COMPUTER_AND_IT = 8,
                    CONSTRUCTION = 9,
                    CUSTOMER_SERVICE = 10,
                    EDUCATION = 11,
                    ENTERTAINMENT_AND_TRAVEL = 12,
                    FARMING_AND_OUTDOORS = 13,
                    HEALTHCARE = 14,
                    HUMAN_RESOURCES = 15,
                    INSTALLATION_MAINTENANCE_AND_REPAIR = 16,
                    LEGAL = 17,
                    MANAGEMENT = 18,
                    MANUFACTURING_AND_WAREHOUSE = 19,
                    MEDIA_COMMUNICATIONS_AND_WRITING = 20,
                    OIL_GAS_AND_MINING = 21,
                    PERSONAL_CARE_AND_SERVICES = 22,
                    PROTECTIVE_SERVICES = 23,
                    REAL_ESTATE = 24,
                    RESTAURANT_AND_HOSPITALITY = 25,
                    SALES_AND_RETAIL = 26,
                    SCIENCE_AND_ENGINEERING = 27,
                    SOCIAL_SERVICES_AND_NON_PROFIT = 28,
                    SPORTS_FITNESS_AND_RECREATION = 29,
                    TRANSPORTATION_AND_LOGISTICS = 30
                }

                /** PostingRegion enum. */
                enum PostingRegion {
                    POSTING_REGION_UNSPECIFIED = 0,
                    ADMINISTRATIVE_AREA = 1,
                    NATION = 2,
                    TELECOMMUTE = 3
                }

                /** Visibility enum. */
                enum Visibility {
                    VISIBILITY_UNSPECIFIED = 0,
                    ACCOUNT_ONLY = 1,
                    SHARED_WITH_GOOGLE = 2,
                    SHARED_WITH_PUBLIC = 3
                }

                /** ContactInfoUsage enum. */
                enum ContactInfoUsage {
                    CONTACT_INFO_USAGE_UNSPECIFIED = 0,
                    PERSONAL = 1,
                    WORK = 2,
                    SCHOOL = 3
                }

                /** HtmlSanitization enum. */
                enum HtmlSanitization {
                    HTML_SANITIZATION_UNSPECIFIED = 0,
                    HTML_SANITIZATION_DISABLED = 1,
                    SIMPLE_FORMATTING_ONLY = 2
                }

                /** CommuteMethod enum. */
                enum CommuteMethod {
                    COMMUTE_METHOD_UNSPECIFIED = 0,
                    DRIVING = 1,
                    TRANSIT = 2,
                    WALKING = 3,
                    CYCLING = 4
                }

                /** Properties of a RequestMetadata. */
                interface IRequestMetadata {

                    /** RequestMetadata domain */
                    domain?: (string|null);

                    /** RequestMetadata sessionId */
                    sessionId?: (string|null);

                    /** RequestMetadata userId */
                    userId?: (string|null);

                    /** RequestMetadata allowMissingIds */
                    allowMissingIds?: (boolean|null);

                    /** RequestMetadata deviceInfo */
                    deviceInfo?: (google.cloud.talent.v4beta1.IDeviceInfo|null);
                }

                /** Represents a RequestMetadata. */
                class RequestMetadata implements IRequestMetadata {

                    /**
                     * Constructs a new RequestMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IRequestMetadata);

                    /** RequestMetadata domain. */
                    public domain: string;

                    /** RequestMetadata sessionId. */
                    public sessionId: string;

                    /** RequestMetadata userId. */
                    public userId: string;

                    /** RequestMetadata allowMissingIds. */
                    public allowMissingIds: boolean;

                    /** RequestMetadata deviceInfo. */
                    public deviceInfo?: (google.cloud.talent.v4beta1.IDeviceInfo|null);

                    /**
                     * Creates a new RequestMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RequestMetadata instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IRequestMetadata): google.cloud.talent.v4beta1.RequestMetadata;

                    /**
                     * Encodes the specified RequestMetadata message. Does not implicitly {@link google.cloud.talent.v4beta1.RequestMetadata.verify|verify} messages.
                     * @param message RequestMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RequestMetadata message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.RequestMetadata.verify|verify} messages.
                     * @param message RequestMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IRequestMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RequestMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RequestMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.RequestMetadata;

                    /**
                     * Decodes a RequestMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RequestMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.RequestMetadata;

                    /**
                     * Verifies a RequestMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RequestMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RequestMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.RequestMetadata;

                    /**
                     * Creates a plain object from a RequestMetadata message. Also converts values to other types if specified.
                     * @param message RequestMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.RequestMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RequestMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResponseMetadata. */
                interface IResponseMetadata {

                    /** ResponseMetadata requestId */
                    requestId?: (string|null);
                }

                /** Represents a ResponseMetadata. */
                class ResponseMetadata implements IResponseMetadata {

                    /**
                     * Constructs a new ResponseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IResponseMetadata);

                    /** ResponseMetadata requestId. */
                    public requestId: string;

                    /**
                     * Creates a new ResponseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResponseMetadata instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IResponseMetadata): google.cloud.talent.v4beta1.ResponseMetadata;

                    /**
                     * Encodes the specified ResponseMetadata message. Does not implicitly {@link google.cloud.talent.v4beta1.ResponseMetadata.verify|verify} messages.
                     * @param message ResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResponseMetadata message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ResponseMetadata.verify|verify} messages.
                     * @param message ResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResponseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ResponseMetadata;

                    /**
                     * Decodes a ResponseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ResponseMetadata;

                    /**
                     * Verifies a ResponseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResponseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResponseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ResponseMetadata;

                    /**
                     * Creates a plain object from a ResponseMetadata message. Also converts values to other types if specified.
                     * @param message ResponseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ResponseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResponseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeviceInfo. */
                interface IDeviceInfo {

                    /** DeviceInfo deviceType */
                    deviceType?: (google.cloud.talent.v4beta1.DeviceInfo.DeviceType|null);

                    /** DeviceInfo id */
                    id?: (string|null);
                }

                /** Represents a DeviceInfo. */
                class DeviceInfo implements IDeviceInfo {

                    /**
                     * Constructs a new DeviceInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeviceInfo);

                    /** DeviceInfo deviceType. */
                    public deviceType: google.cloud.talent.v4beta1.DeviceInfo.DeviceType;

                    /** DeviceInfo id. */
                    public id: string;

                    /**
                     * Creates a new DeviceInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeviceInfo instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeviceInfo): google.cloud.talent.v4beta1.DeviceInfo;

                    /**
                     * Encodes the specified DeviceInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.DeviceInfo.verify|verify} messages.
                     * @param message DeviceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeviceInfo.verify|verify} messages.
                     * @param message DeviceInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeviceInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeviceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeviceInfo;

                    /**
                     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeviceInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeviceInfo;

                    /**
                     * Verifies a DeviceInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeviceInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeviceInfo;

                    /**
                     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
                     * @param message DeviceInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeviceInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeviceInfo {

                    /** DeviceType enum. */
                    enum DeviceType {
                        DEVICE_TYPE_UNSPECIFIED = 0,
                        WEB = 1,
                        MOBILE_WEB = 2,
                        ANDROID = 3,
                        IOS = 4,
                        BOT = 5,
                        OTHER = 6
                    }
                }

                /** Properties of a CustomAttribute. */
                interface ICustomAttribute {

                    /** CustomAttribute stringValues */
                    stringValues?: (string[]|null);

                    /** CustomAttribute longValues */
                    longValues?: ((number|Long)[]|null);

                    /** CustomAttribute filterable */
                    filterable?: (boolean|null);
                }

                /** Represents a CustomAttribute. */
                class CustomAttribute implements ICustomAttribute {

                    /**
                     * Constructs a new CustomAttribute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICustomAttribute);

                    /** CustomAttribute stringValues. */
                    public stringValues: string[];

                    /** CustomAttribute longValues. */
                    public longValues: (number|Long)[];

                    /** CustomAttribute filterable. */
                    public filterable: boolean;

                    /**
                     * Creates a new CustomAttribute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomAttribute instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICustomAttribute): google.cloud.talent.v4beta1.CustomAttribute;

                    /**
                     * Encodes the specified CustomAttribute message. Does not implicitly {@link google.cloud.talent.v4beta1.CustomAttribute.verify|verify} messages.
                     * @param message CustomAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomAttribute message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CustomAttribute.verify|verify} messages.
                     * @param message CustomAttribute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomAttribute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CustomAttribute;

                    /**
                     * Decodes a CustomAttribute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomAttribute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CustomAttribute;

                    /**
                     * Verifies a CustomAttribute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomAttribute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomAttribute
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CustomAttribute;

                    /**
                     * Creates a plain object from a CustomAttribute message. Also converts values to other types if specified.
                     * @param message CustomAttribute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CustomAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomAttribute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SpellingCorrection. */
                interface ISpellingCorrection {

                    /** SpellingCorrection corrected */
                    corrected?: (boolean|null);

                    /** SpellingCorrection correctedText */
                    correctedText?: (string|null);

                    /** SpellingCorrection correctedHtml */
                    correctedHtml?: (string|null);
                }

                /** Represents a SpellingCorrection. */
                class SpellingCorrection implements ISpellingCorrection {

                    /**
                     * Constructs a new SpellingCorrection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISpellingCorrection);

                    /** SpellingCorrection corrected. */
                    public corrected: boolean;

                    /** SpellingCorrection correctedText. */
                    public correctedText: string;

                    /** SpellingCorrection correctedHtml. */
                    public correctedHtml: string;

                    /**
                     * Creates a new SpellingCorrection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpellingCorrection instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISpellingCorrection): google.cloud.talent.v4beta1.SpellingCorrection;

                    /**
                     * Encodes the specified SpellingCorrection message. Does not implicitly {@link google.cloud.talent.v4beta1.SpellingCorrection.verify|verify} messages.
                     * @param message SpellingCorrection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISpellingCorrection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpellingCorrection message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SpellingCorrection.verify|verify} messages.
                     * @param message SpellingCorrection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISpellingCorrection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpellingCorrection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpellingCorrection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SpellingCorrection;

                    /**
                     * Decodes a SpellingCorrection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpellingCorrection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SpellingCorrection;

                    /**
                     * Verifies a SpellingCorrection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpellingCorrection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpellingCorrection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SpellingCorrection;

                    /**
                     * Creates a plain object from a SpellingCorrection message. Also converts values to other types if specified.
                     * @param message SpellingCorrection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SpellingCorrection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpellingCorrection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CompensationInfo. */
                interface ICompensationInfo {

                    /** CompensationInfo entries */
                    entries?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry[]|null);

                    /** CompensationInfo annualizedBaseCompensationRange */
                    annualizedBaseCompensationRange?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                    /** CompensationInfo annualizedTotalCompensationRange */
                    annualizedTotalCompensationRange?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);
                }

                /** Represents a CompensationInfo. */
                class CompensationInfo implements ICompensationInfo {

                    /**
                     * Constructs a new CompensationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICompensationInfo);

                    /** CompensationInfo entries. */
                    public entries: google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry[];

                    /** CompensationInfo annualizedBaseCompensationRange. */
                    public annualizedBaseCompensationRange?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                    /** CompensationInfo annualizedTotalCompensationRange. */
                    public annualizedTotalCompensationRange?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                    /**
                     * Creates a new CompensationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompensationInfo instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICompensationInfo): google.cloud.talent.v4beta1.CompensationInfo;

                    /**
                     * Encodes the specified CompensationInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.verify|verify} messages.
                     * @param message CompensationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICompensationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompensationInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.verify|verify} messages.
                     * @param message CompensationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICompensationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompensationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompensationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompensationInfo;

                    /**
                     * Decodes a CompensationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompensationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompensationInfo;

                    /**
                     * Verifies a CompensationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompensationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompensationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompensationInfo;

                    /**
                     * Creates a plain object from a CompensationInfo message. Also converts values to other types if specified.
                     * @param message CompensationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CompensationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompensationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompensationInfo {

                    /** Properties of a CompensationEntry. */
                    interface ICompensationEntry {

                        /** CompensationEntry type */
                        type?: (google.cloud.talent.v4beta1.CompensationInfo.CompensationType|null);

                        /** CompensationEntry unit */
                        unit?: (google.cloud.talent.v4beta1.CompensationInfo.CompensationUnit|null);

                        /** CompensationEntry amount */
                        amount?: (google.type.IMoney|null);

                        /** CompensationEntry range */
                        range?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                        /** CompensationEntry description */
                        description?: (string|null);

                        /** CompensationEntry expectedUnitsPerYear */
                        expectedUnitsPerYear?: (google.protobuf.IDoubleValue|null);
                    }

                    /** Represents a CompensationEntry. */
                    class CompensationEntry implements ICompensationEntry {

                        /**
                         * Constructs a new CompensationEntry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry);

                        /** CompensationEntry type. */
                        public type: google.cloud.talent.v4beta1.CompensationInfo.CompensationType;

                        /** CompensationEntry unit. */
                        public unit: google.cloud.talent.v4beta1.CompensationInfo.CompensationUnit;

                        /** CompensationEntry amount. */
                        public amount?: (google.type.IMoney|null);

                        /** CompensationEntry range. */
                        public range?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                        /** CompensationEntry description. */
                        public description: string;

                        /** CompensationEntry expectedUnitsPerYear. */
                        public expectedUnitsPerYear?: (google.protobuf.IDoubleValue|null);

                        /** CompensationEntry compensationAmount. */
                        public compensationAmount?: ("amount"|"range");

                        /**
                         * Creates a new CompensationEntry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompensationEntry instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry): google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry;

                        /**
                         * Encodes the specified CompensationEntry message. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry.verify|verify} messages.
                         * @param message CompensationEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompensationEntry message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry.verify|verify} messages.
                         * @param message CompensationEntry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.CompensationInfo.ICompensationEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompensationEntry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompensationEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry;

                        /**
                         * Decodes a CompensationEntry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompensationEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry;

                        /**
                         * Verifies a CompensationEntry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompensationEntry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompensationEntry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry;

                        /**
                         * Creates a plain object from a CompensationEntry message. Also converts values to other types if specified.
                         * @param message CompensationEntry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.CompensationInfo.CompensationEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompensationEntry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CompensationRange. */
                    interface ICompensationRange {

                        /** CompensationRange maxCompensation */
                        maxCompensation?: (google.type.IMoney|null);

                        /** CompensationRange minCompensation */
                        minCompensation?: (google.type.IMoney|null);
                    }

                    /** Represents a CompensationRange. */
                    class CompensationRange implements ICompensationRange {

                        /**
                         * Constructs a new CompensationRange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange);

                        /** CompensationRange maxCompensation. */
                        public maxCompensation?: (google.type.IMoney|null);

                        /** CompensationRange minCompensation. */
                        public minCompensation?: (google.type.IMoney|null);

                        /**
                         * Creates a new CompensationRange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompensationRange instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange): google.cloud.talent.v4beta1.CompensationInfo.CompensationRange;

                        /**
                         * Encodes the specified CompensationRange message. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.CompensationRange.verify|verify} messages.
                         * @param message CompensationRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompensationRange message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationInfo.CompensationRange.verify|verify} messages.
                         * @param message CompensationRange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompensationRange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompensationRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompensationInfo.CompensationRange;

                        /**
                         * Decodes a CompensationRange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompensationRange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompensationInfo.CompensationRange;

                        /**
                         * Verifies a CompensationRange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompensationRange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompensationRange
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompensationInfo.CompensationRange;

                        /**
                         * Creates a plain object from a CompensationRange message. Also converts values to other types if specified.
                         * @param message CompensationRange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.CompensationInfo.CompensationRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompensationRange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** CompensationType enum. */
                    enum CompensationType {
                        COMPENSATION_TYPE_UNSPECIFIED = 0,
                        BASE = 1,
                        BONUS = 2,
                        SIGNING_BONUS = 3,
                        EQUITY = 4,
                        PROFIT_SHARING = 5,
                        COMMISSIONS = 6,
                        TIPS = 7,
                        OTHER_COMPENSATION_TYPE = 8
                    }

                    /** CompensationUnit enum. */
                    enum CompensationUnit {
                        COMPENSATION_UNIT_UNSPECIFIED = 0,
                        HOURLY = 1,
                        DAILY = 2,
                        WEEKLY = 3,
                        MONTHLY = 4,
                        YEARLY = 5,
                        ONE_TIME = 6,
                        OTHER_COMPENSATION_UNIT = 7
                    }
                }

                /** Properties of a Certification. */
                interface ICertification {

                    /** Certification displayName */
                    displayName?: (string|null);

                    /** Certification acquireDate */
                    acquireDate?: (google.type.IDate|null);

                    /** Certification expireDate */
                    expireDate?: (google.type.IDate|null);

                    /** Certification authority */
                    authority?: (string|null);

                    /** Certification description */
                    description?: (string|null);
                }

                /** Represents a Certification. */
                class Certification implements ICertification {

                    /**
                     * Constructs a new Certification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICertification);

                    /** Certification displayName. */
                    public displayName: string;

                    /** Certification acquireDate. */
                    public acquireDate?: (google.type.IDate|null);

                    /** Certification expireDate. */
                    public expireDate?: (google.type.IDate|null);

                    /** Certification authority. */
                    public authority: string;

                    /** Certification description. */
                    public description: string;

                    /**
                     * Creates a new Certification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Certification instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICertification): google.cloud.talent.v4beta1.Certification;

                    /**
                     * Encodes the specified Certification message. Does not implicitly {@link google.cloud.talent.v4beta1.Certification.verify|verify} messages.
                     * @param message Certification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICertification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Certification message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Certification.verify|verify} messages.
                     * @param message Certification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICertification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Certification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Certification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Certification;

                    /**
                     * Decodes a Certification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Certification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Certification;

                    /**
                     * Verifies a Certification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Certification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Certification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Certification;

                    /**
                     * Creates a plain object from a Certification message. Also converts values to other types if specified.
                     * @param message Certification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Certification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Certification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Skill. */
                interface ISkill {

                    /** Skill displayName */
                    displayName?: (string|null);

                    /** Skill lastUsedDate */
                    lastUsedDate?: (google.type.IDate|null);

                    /** Skill level */
                    level?: (google.cloud.talent.v4beta1.SkillProficiencyLevel|null);

                    /** Skill context */
                    context?: (string|null);

                    /** Skill skillNameSnippet */
                    skillNameSnippet?: (string|null);
                }

                /** Represents a Skill. */
                class Skill implements ISkill {

                    /**
                     * Constructs a new Skill.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISkill);

                    /** Skill displayName. */
                    public displayName: string;

                    /** Skill lastUsedDate. */
                    public lastUsedDate?: (google.type.IDate|null);

                    /** Skill level. */
                    public level: google.cloud.talent.v4beta1.SkillProficiencyLevel;

                    /** Skill context. */
                    public context: string;

                    /** Skill skillNameSnippet. */
                    public skillNameSnippet: string;

                    /**
                     * Creates a new Skill instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Skill instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISkill): google.cloud.talent.v4beta1.Skill;

                    /**
                     * Encodes the specified Skill message. Does not implicitly {@link google.cloud.talent.v4beta1.Skill.verify|verify} messages.
                     * @param message Skill message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Skill message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Skill.verify|verify} messages.
                     * @param message Skill message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Skill message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Skill
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Skill;

                    /**
                     * Decodes a Skill message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Skill
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Skill;

                    /**
                     * Verifies a Skill message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Skill message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Skill
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Skill;

                    /**
                     * Creates a plain object from a Skill message. Also converts values to other types if specified.
                     * @param message Skill
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Skill to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Interview. */
                interface IInterview {

                    /** Interview rating */
                    rating?: (google.cloud.talent.v4beta1.IRating|null);

                    /** Interview outcome */
                    outcome?: (google.cloud.talent.v4beta1.Outcome|null);
                }

                /** Represents an Interview. */
                class Interview implements IInterview {

                    /**
                     * Constructs a new Interview.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IInterview);

                    /** Interview rating. */
                    public rating?: (google.cloud.talent.v4beta1.IRating|null);

                    /** Interview outcome. */
                    public outcome: google.cloud.talent.v4beta1.Outcome;

                    /**
                     * Creates a new Interview instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Interview instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IInterview): google.cloud.talent.v4beta1.Interview;

                    /**
                     * Encodes the specified Interview message. Does not implicitly {@link google.cloud.talent.v4beta1.Interview.verify|verify} messages.
                     * @param message Interview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IInterview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Interview message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Interview.verify|verify} messages.
                     * @param message Interview message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IInterview, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Interview message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Interview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Interview;

                    /**
                     * Decodes an Interview message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Interview
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Interview;

                    /**
                     * Verifies an Interview message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Interview message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Interview
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Interview;

                    /**
                     * Creates a plain object from an Interview message. Also converts values to other types if specified.
                     * @param message Interview
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Interview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Interview to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Rating. */
                interface IRating {

                    /** Rating overall */
                    overall?: (number|null);

                    /** Rating min */
                    min?: (number|null);

                    /** Rating max */
                    max?: (number|null);

                    /** Rating interval */
                    interval?: (number|null);
                }

                /** Represents a Rating. */
                class Rating implements IRating {

                    /**
                     * Constructs a new Rating.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IRating);

                    /** Rating overall. */
                    public overall: number;

                    /** Rating min. */
                    public min: number;

                    /** Rating max. */
                    public max: number;

                    /** Rating interval. */
                    public interval: number;

                    /**
                     * Creates a new Rating instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rating instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IRating): google.cloud.talent.v4beta1.Rating;

                    /**
                     * Encodes the specified Rating message. Does not implicitly {@link google.cloud.talent.v4beta1.Rating.verify|verify} messages.
                     * @param message Rating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rating message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Rating.verify|verify} messages.
                     * @param message Rating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rating message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Rating;

                    /**
                     * Decodes a Rating message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Rating;

                    /**
                     * Verifies a Rating message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Rating message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Rating
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Rating;

                    /**
                     * Creates a plain object from a Rating message. Also converts values to other types if specified.
                     * @param message Rating
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Rating, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Rating to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchOperationMetadata. */
                interface IBatchOperationMetadata {

                    /** BatchOperationMetadata state */
                    state?: (google.cloud.talent.v4beta1.BatchOperationMetadata.State|null);

                    /** BatchOperationMetadata stateDescription */
                    stateDescription?: (string|null);

                    /** BatchOperationMetadata successCount */
                    successCount?: (number|null);

                    /** BatchOperationMetadata failureCount */
                    failureCount?: (number|null);

                    /** BatchOperationMetadata totalCount */
                    totalCount?: (number|null);

                    /** BatchOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchOperationMetadata. */
                class BatchOperationMetadata implements IBatchOperationMetadata {

                    /**
                     * Constructs a new BatchOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IBatchOperationMetadata);

                    /** BatchOperationMetadata state. */
                    public state: google.cloud.talent.v4beta1.BatchOperationMetadata.State;

                    /** BatchOperationMetadata stateDescription. */
                    public stateDescription: string;

                    /** BatchOperationMetadata successCount. */
                    public successCount: number;

                    /** BatchOperationMetadata failureCount. */
                    public failureCount: number;

                    /** BatchOperationMetadata totalCount. */
                    public totalCount: number;

                    /** BatchOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** BatchOperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IBatchOperationMetadata): google.cloud.talent.v4beta1.BatchOperationMetadata;

                    /**
                     * Encodes the specified BatchOperationMetadata message. Does not implicitly {@link google.cloud.talent.v4beta1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.BatchOperationMetadata.verify|verify} messages.
                     * @param message BatchOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IBatchOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.BatchOperationMetadata;

                    /**
                     * Decodes a BatchOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.BatchOperationMetadata;

                    /**
                     * Verifies a BatchOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.BatchOperationMetadata;

                    /**
                     * Creates a plain object from a BatchOperationMetadata message. Also converts values to other types if specified.
                     * @param message BatchOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.BatchOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchOperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        INITIALIZING = 1,
                        PROCESSING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        CANCELLING = 5,
                        CANCELLED = 6
                    }
                }

                /** SkillProficiencyLevel enum. */
                enum SkillProficiencyLevel {
                    SKILL_PROFICIENCY_LEVEL_UNSPECIFIED = 0,
                    UNSKILLED = 6,
                    FUNDAMENTAL_AWARENESS = 1,
                    NOVICE = 2,
                    INTERMEDIATE = 3,
                    ADVANCED = 4,
                    EXPERT = 5
                }

                /** Outcome enum. */
                enum Outcome {
                    OUTCOME_UNSPECIFIED = 0,
                    POSITIVE = 1,
                    NEUTRAL = 2,
                    NEGATIVE = 3,
                    OUTCOME_NOT_AVAILABLE = 4
                }

                /** AvailabilitySignalType enum. */
                enum AvailabilitySignalType {
                    AVAILABILITY_SIGNAL_TYPE_UNSPECIFIED = 0,
                    JOB_APPLICATION = 1,
                    RESUME_UPDATE = 2,
                    CANDIDATE_UPDATE = 3,
                    CLIENT_SUBMISSION = 4
                }

                /** Represents a CompanyService */
                class CompanyService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CompanyService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CompanyService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CompanyService;

                    /**
                     * Calls CreateCompany.
                     * @param request CreateCompanyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Company
                     */
                    public createCompany(request: google.cloud.talent.v4beta1.ICreateCompanyRequest, callback: google.cloud.talent.v4beta1.CompanyService.CreateCompanyCallback): void;

                    /**
                     * Calls CreateCompany.
                     * @param request CreateCompanyRequest message or plain object
                     * @returns Promise
                     */
                    public createCompany(request: google.cloud.talent.v4beta1.ICreateCompanyRequest): Promise<google.cloud.talent.v4beta1.Company>;

                    /**
                     * Calls GetCompany.
                     * @param request GetCompanyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Company
                     */
                    public getCompany(request: google.cloud.talent.v4beta1.IGetCompanyRequest, callback: google.cloud.talent.v4beta1.CompanyService.GetCompanyCallback): void;

                    /**
                     * Calls GetCompany.
                     * @param request GetCompanyRequest message or plain object
                     * @returns Promise
                     */
                    public getCompany(request: google.cloud.talent.v4beta1.IGetCompanyRequest): Promise<google.cloud.talent.v4beta1.Company>;

                    /**
                     * Calls UpdateCompany.
                     * @param request UpdateCompanyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Company
                     */
                    public updateCompany(request: google.cloud.talent.v4beta1.IUpdateCompanyRequest, callback: google.cloud.talent.v4beta1.CompanyService.UpdateCompanyCallback): void;

                    /**
                     * Calls UpdateCompany.
                     * @param request UpdateCompanyRequest message or plain object
                     * @returns Promise
                     */
                    public updateCompany(request: google.cloud.talent.v4beta1.IUpdateCompanyRequest): Promise<google.cloud.talent.v4beta1.Company>;

                    /**
                     * Calls DeleteCompany.
                     * @param request DeleteCompanyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteCompany(request: google.cloud.talent.v4beta1.IDeleteCompanyRequest, callback: google.cloud.talent.v4beta1.CompanyService.DeleteCompanyCallback): void;

                    /**
                     * Calls DeleteCompany.
                     * @param request DeleteCompanyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCompany(request: google.cloud.talent.v4beta1.IDeleteCompanyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListCompanies.
                     * @param request ListCompaniesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCompaniesResponse
                     */
                    public listCompanies(request: google.cloud.talent.v4beta1.IListCompaniesRequest, callback: google.cloud.talent.v4beta1.CompanyService.ListCompaniesCallback): void;

                    /**
                     * Calls ListCompanies.
                     * @param request ListCompaniesRequest message or plain object
                     * @returns Promise
                     */
                    public listCompanies(request: google.cloud.talent.v4beta1.IListCompaniesRequest): Promise<google.cloud.talent.v4beta1.ListCompaniesResponse>;
                }

                namespace CompanyService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.CompanyService#createCompany}.
                     * @param error Error, if any
                     * @param [response] Company
                     */
                    type CreateCompanyCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Company) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.CompanyService#getCompany}.
                     * @param error Error, if any
                     * @param [response] Company
                     */
                    type GetCompanyCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Company) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.CompanyService#updateCompany}.
                     * @param error Error, if any
                     * @param [response] Company
                     */
                    type UpdateCompanyCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Company) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.CompanyService#deleteCompany}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteCompanyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.CompanyService#listCompanies}.
                     * @param error Error, if any
                     * @param [response] ListCompaniesResponse
                     */
                    type ListCompaniesCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ListCompaniesResponse) => void;
                }

                /** Properties of a CreateCompanyRequest. */
                interface ICreateCompanyRequest {

                    /** CreateCompanyRequest parent */
                    parent?: (string|null);

                    /** CreateCompanyRequest company */
                    company?: (google.cloud.talent.v4beta1.ICompany|null);
                }

                /** Represents a CreateCompanyRequest. */
                class CreateCompanyRequest implements ICreateCompanyRequest {

                    /**
                     * Constructs a new CreateCompanyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateCompanyRequest);

                    /** CreateCompanyRequest parent. */
                    public parent: string;

                    /** CreateCompanyRequest company. */
                    public company?: (google.cloud.talent.v4beta1.ICompany|null);

                    /**
                     * Creates a new CreateCompanyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCompanyRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateCompanyRequest): google.cloud.talent.v4beta1.CreateCompanyRequest;

                    /**
                     * Encodes the specified CreateCompanyRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateCompanyRequest.verify|verify} messages.
                     * @param message CreateCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCompanyRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateCompanyRequest.verify|verify} messages.
                     * @param message CreateCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCompanyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateCompanyRequest;

                    /**
                     * Decodes a CreateCompanyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateCompanyRequest;

                    /**
                     * Verifies a CreateCompanyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCompanyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCompanyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateCompanyRequest;

                    /**
                     * Creates a plain object from a CreateCompanyRequest message. Also converts values to other types if specified.
                     * @param message CreateCompanyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateCompanyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCompanyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCompanyRequest. */
                interface IGetCompanyRequest {

                    /** GetCompanyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCompanyRequest. */
                class GetCompanyRequest implements IGetCompanyRequest {

                    /**
                     * Constructs a new GetCompanyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IGetCompanyRequest);

                    /** GetCompanyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCompanyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCompanyRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IGetCompanyRequest): google.cloud.talent.v4beta1.GetCompanyRequest;

                    /**
                     * Encodes the specified GetCompanyRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.GetCompanyRequest.verify|verify} messages.
                     * @param message GetCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IGetCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCompanyRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.GetCompanyRequest.verify|verify} messages.
                     * @param message GetCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IGetCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCompanyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.GetCompanyRequest;

                    /**
                     * Decodes a GetCompanyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.GetCompanyRequest;

                    /**
                     * Verifies a GetCompanyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCompanyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCompanyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.GetCompanyRequest;

                    /**
                     * Creates a plain object from a GetCompanyRequest message. Also converts values to other types if specified.
                     * @param message GetCompanyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.GetCompanyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCompanyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateCompanyRequest. */
                interface IUpdateCompanyRequest {

                    /** UpdateCompanyRequest company */
                    company?: (google.cloud.talent.v4beta1.ICompany|null);

                    /** UpdateCompanyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateCompanyRequest. */
                class UpdateCompanyRequest implements IUpdateCompanyRequest {

                    /**
                     * Constructs a new UpdateCompanyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IUpdateCompanyRequest);

                    /** UpdateCompanyRequest company. */
                    public company?: (google.cloud.talent.v4beta1.ICompany|null);

                    /** UpdateCompanyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateCompanyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCompanyRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IUpdateCompanyRequest): google.cloud.talent.v4beta1.UpdateCompanyRequest;

                    /**
                     * Encodes the specified UpdateCompanyRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateCompanyRequest.verify|verify} messages.
                     * @param message UpdateCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IUpdateCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCompanyRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateCompanyRequest.verify|verify} messages.
                     * @param message UpdateCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IUpdateCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCompanyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.UpdateCompanyRequest;

                    /**
                     * Decodes an UpdateCompanyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.UpdateCompanyRequest;

                    /**
                     * Verifies an UpdateCompanyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCompanyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCompanyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.UpdateCompanyRequest;

                    /**
                     * Creates a plain object from an UpdateCompanyRequest message. Also converts values to other types if specified.
                     * @param message UpdateCompanyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.UpdateCompanyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCompanyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteCompanyRequest. */
                interface IDeleteCompanyRequest {

                    /** DeleteCompanyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteCompanyRequest. */
                class DeleteCompanyRequest implements IDeleteCompanyRequest {

                    /**
                     * Constructs a new DeleteCompanyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeleteCompanyRequest);

                    /** DeleteCompanyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteCompanyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCompanyRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeleteCompanyRequest): google.cloud.talent.v4beta1.DeleteCompanyRequest;

                    /**
                     * Encodes the specified DeleteCompanyRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteCompanyRequest.verify|verify} messages.
                     * @param message DeleteCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeleteCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCompanyRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteCompanyRequest.verify|verify} messages.
                     * @param message DeleteCompanyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeleteCompanyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCompanyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeleteCompanyRequest;

                    /**
                     * Decodes a DeleteCompanyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCompanyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeleteCompanyRequest;

                    /**
                     * Verifies a DeleteCompanyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCompanyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCompanyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeleteCompanyRequest;

                    /**
                     * Creates a plain object from a DeleteCompanyRequest message. Also converts values to other types if specified.
                     * @param message DeleteCompanyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeleteCompanyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCompanyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCompaniesRequest. */
                interface IListCompaniesRequest {

                    /** ListCompaniesRequest parent */
                    parent?: (string|null);

                    /** ListCompaniesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCompaniesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCompaniesRequest requireOpenJobs */
                    requireOpenJobs?: (boolean|null);
                }

                /** Represents a ListCompaniesRequest. */
                class ListCompaniesRequest implements IListCompaniesRequest {

                    /**
                     * Constructs a new ListCompaniesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListCompaniesRequest);

                    /** ListCompaniesRequest parent. */
                    public parent: string;

                    /** ListCompaniesRequest pageToken. */
                    public pageToken: string;

                    /** ListCompaniesRequest pageSize. */
                    public pageSize: number;

                    /** ListCompaniesRequest requireOpenJobs. */
                    public requireOpenJobs: boolean;

                    /**
                     * Creates a new ListCompaniesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCompaniesRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListCompaniesRequest): google.cloud.talent.v4beta1.ListCompaniesRequest;

                    /**
                     * Encodes the specified ListCompaniesRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.ListCompaniesRequest.verify|verify} messages.
                     * @param message ListCompaniesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListCompaniesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCompaniesRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListCompaniesRequest.verify|verify} messages.
                     * @param message ListCompaniesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListCompaniesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCompaniesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCompaniesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListCompaniesRequest;

                    /**
                     * Decodes a ListCompaniesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCompaniesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListCompaniesRequest;

                    /**
                     * Verifies a ListCompaniesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCompaniesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCompaniesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListCompaniesRequest;

                    /**
                     * Creates a plain object from a ListCompaniesRequest message. Also converts values to other types if specified.
                     * @param message ListCompaniesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListCompaniesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCompaniesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCompaniesResponse. */
                interface IListCompaniesResponse {

                    /** ListCompaniesResponse companies */
                    companies?: (google.cloud.talent.v4beta1.ICompany[]|null);

                    /** ListCompaniesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListCompaniesResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);
                }

                /** Represents a ListCompaniesResponse. */
                class ListCompaniesResponse implements IListCompaniesResponse {

                    /**
                     * Constructs a new ListCompaniesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListCompaniesResponse);

                    /** ListCompaniesResponse companies. */
                    public companies: google.cloud.talent.v4beta1.ICompany[];

                    /** ListCompaniesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListCompaniesResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /**
                     * Creates a new ListCompaniesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCompaniesResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListCompaniesResponse): google.cloud.talent.v4beta1.ListCompaniesResponse;

                    /**
                     * Encodes the specified ListCompaniesResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.ListCompaniesResponse.verify|verify} messages.
                     * @param message ListCompaniesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListCompaniesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCompaniesResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListCompaniesResponse.verify|verify} messages.
                     * @param message ListCompaniesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListCompaniesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCompaniesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCompaniesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListCompaniesResponse;

                    /**
                     * Decodes a ListCompaniesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCompaniesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListCompaniesResponse;

                    /**
                     * Verifies a ListCompaniesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCompaniesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCompaniesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListCompaniesResponse;

                    /**
                     * Creates a plain object from a ListCompaniesResponse message. Also converts values to other types if specified.
                     * @param message ListCompaniesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListCompaniesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCompaniesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Company. */
                interface ICompany {

                    /** Company name */
                    name?: (string|null);

                    /** Company displayName */
                    displayName?: (string|null);

                    /** Company externalId */
                    externalId?: (string|null);

                    /** Company size */
                    size?: (google.cloud.talent.v4beta1.CompanySize|null);

                    /** Company headquartersAddress */
                    headquartersAddress?: (string|null);

                    /** Company hiringAgency */
                    hiringAgency?: (boolean|null);

                    /** Company eeoText */
                    eeoText?: (string|null);

                    /** Company websiteUri */
                    websiteUri?: (string|null);

                    /** Company careerSiteUri */
                    careerSiteUri?: (string|null);

                    /** Company imageUri */
                    imageUri?: (string|null);

                    /** Company keywordSearchableJobCustomAttributes */
                    keywordSearchableJobCustomAttributes?: (string[]|null);

                    /** Company derivedInfo */
                    derivedInfo?: (google.cloud.talent.v4beta1.Company.IDerivedInfo|null);

                    /** Company suspended */
                    suspended?: (boolean|null);
                }

                /** Represents a Company. */
                class Company implements ICompany {

                    /**
                     * Constructs a new Company.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICompany);

                    /** Company name. */
                    public name: string;

                    /** Company displayName. */
                    public displayName: string;

                    /** Company externalId. */
                    public externalId: string;

                    /** Company size. */
                    public size: google.cloud.talent.v4beta1.CompanySize;

                    /** Company headquartersAddress. */
                    public headquartersAddress: string;

                    /** Company hiringAgency. */
                    public hiringAgency: boolean;

                    /** Company eeoText. */
                    public eeoText: string;

                    /** Company websiteUri. */
                    public websiteUri: string;

                    /** Company careerSiteUri. */
                    public careerSiteUri: string;

                    /** Company imageUri. */
                    public imageUri: string;

                    /** Company keywordSearchableJobCustomAttributes. */
                    public keywordSearchableJobCustomAttributes: string[];

                    /** Company derivedInfo. */
                    public derivedInfo?: (google.cloud.talent.v4beta1.Company.IDerivedInfo|null);

                    /** Company suspended. */
                    public suspended: boolean;

                    /**
                     * Creates a new Company instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Company instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICompany): google.cloud.talent.v4beta1.Company;

                    /**
                     * Encodes the specified Company message. Does not implicitly {@link google.cloud.talent.v4beta1.Company.verify|verify} messages.
                     * @param message Company message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICompany, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Company message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Company.verify|verify} messages.
                     * @param message Company message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICompany, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Company message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Company
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Company;

                    /**
                     * Decodes a Company message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Company
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Company;

                    /**
                     * Verifies a Company message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Company message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Company
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Company;

                    /**
                     * Creates a plain object from a Company message. Also converts values to other types if specified.
                     * @param message Company
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Company, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Company to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Company {

                    /** Properties of a DerivedInfo. */
                    interface IDerivedInfo {

                        /** DerivedInfo headquartersLocation */
                        headquartersLocation?: (google.cloud.talent.v4beta1.ILocation|null);
                    }

                    /** Represents a DerivedInfo. */
                    class DerivedInfo implements IDerivedInfo {

                        /**
                         * Constructs a new DerivedInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.Company.IDerivedInfo);

                        /** DerivedInfo headquartersLocation. */
                        public headquartersLocation?: (google.cloud.talent.v4beta1.ILocation|null);

                        /**
                         * Creates a new DerivedInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DerivedInfo instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.Company.IDerivedInfo): google.cloud.talent.v4beta1.Company.DerivedInfo;

                        /**
                         * Encodes the specified DerivedInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.Company.DerivedInfo.verify|verify} messages.
                         * @param message DerivedInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.Company.IDerivedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DerivedInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Company.DerivedInfo.verify|verify} messages.
                         * @param message DerivedInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.Company.IDerivedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DerivedInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DerivedInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Company.DerivedInfo;

                        /**
                         * Decodes a DerivedInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DerivedInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Company.DerivedInfo;

                        /**
                         * Verifies a DerivedInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DerivedInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DerivedInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Company.DerivedInfo;

                        /**
                         * Creates a plain object from a DerivedInfo message. Also converts values to other types if specified.
                         * @param message DerivedInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.Company.DerivedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DerivedInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents a Completion */
                class Completion extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Completion service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Completion service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Completion;

                    /**
                     * Calls CompleteQuery.
                     * @param request CompleteQueryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CompleteQueryResponse
                     */
                    public completeQuery(request: google.cloud.talent.v4beta1.ICompleteQueryRequest, callback: google.cloud.talent.v4beta1.Completion.CompleteQueryCallback): void;

                    /**
                     * Calls CompleteQuery.
                     * @param request CompleteQueryRequest message or plain object
                     * @returns Promise
                     */
                    public completeQuery(request: google.cloud.talent.v4beta1.ICompleteQueryRequest): Promise<google.cloud.talent.v4beta1.CompleteQueryResponse>;
                }

                namespace Completion {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.Completion#completeQuery}.
                     * @param error Error, if any
                     * @param [response] CompleteQueryResponse
                     */
                    type CompleteQueryCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.CompleteQueryResponse) => void;
                }

                /** Properties of a CompleteQueryRequest. */
                interface ICompleteQueryRequest {

                    /** CompleteQueryRequest parent */
                    parent?: (string|null);

                    /** CompleteQueryRequest query */
                    query?: (string|null);

                    /** CompleteQueryRequest languageCodes */
                    languageCodes?: (string[]|null);

                    /** CompleteQueryRequest pageSize */
                    pageSize?: (number|null);

                    /** CompleteQueryRequest company */
                    company?: (string|null);

                    /** CompleteQueryRequest scope */
                    scope?: (google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope|null);

                    /** CompleteQueryRequest type */
                    type?: (google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType|null);
                }

                /** Represents a CompleteQueryRequest. */
                class CompleteQueryRequest implements ICompleteQueryRequest {

                    /**
                     * Constructs a new CompleteQueryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICompleteQueryRequest);

                    /** CompleteQueryRequest parent. */
                    public parent: string;

                    /** CompleteQueryRequest query. */
                    public query: string;

                    /** CompleteQueryRequest languageCodes. */
                    public languageCodes: string[];

                    /** CompleteQueryRequest pageSize. */
                    public pageSize: number;

                    /** CompleteQueryRequest company. */
                    public company: string;

                    /** CompleteQueryRequest scope. */
                    public scope: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionScope;

                    /** CompleteQueryRequest type. */
                    public type: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType;

                    /**
                     * Creates a new CompleteQueryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompleteQueryRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICompleteQueryRequest): google.cloud.talent.v4beta1.CompleteQueryRequest;

                    /**
                     * Encodes the specified CompleteQueryRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryRequest.verify|verify} messages.
                     * @param message CompleteQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICompleteQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompleteQueryRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryRequest.verify|verify} messages.
                     * @param message CompleteQueryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICompleteQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompleteQueryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompleteQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompleteQueryRequest;

                    /**
                     * Decodes a CompleteQueryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompleteQueryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompleteQueryRequest;

                    /**
                     * Verifies a CompleteQueryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompleteQueryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompleteQueryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompleteQueryRequest;

                    /**
                     * Creates a plain object from a CompleteQueryRequest message. Also converts values to other types if specified.
                     * @param message CompleteQueryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CompleteQueryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompleteQueryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompleteQueryRequest {

                    /** CompletionScope enum. */
                    enum CompletionScope {
                        COMPLETION_SCOPE_UNSPECIFIED = 0,
                        TENANT = 1,
                        PUBLIC = 2
                    }

                    /** CompletionType enum. */
                    enum CompletionType {
                        COMPLETION_TYPE_UNSPECIFIED = 0,
                        JOB_TITLE = 1,
                        COMPANY_NAME = 2,
                        COMBINED = 3
                    }
                }

                /** Properties of a CompleteQueryResponse. */
                interface ICompleteQueryResponse {

                    /** CompleteQueryResponse completionResults */
                    completionResults?: (google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult[]|null);

                    /** CompleteQueryResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);
                }

                /** Represents a CompleteQueryResponse. */
                class CompleteQueryResponse implements ICompleteQueryResponse {

                    /**
                     * Constructs a new CompleteQueryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICompleteQueryResponse);

                    /** CompleteQueryResponse completionResults. */
                    public completionResults: google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult[];

                    /** CompleteQueryResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /**
                     * Creates a new CompleteQueryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompleteQueryResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICompleteQueryResponse): google.cloud.talent.v4beta1.CompleteQueryResponse;

                    /**
                     * Encodes the specified CompleteQueryResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryResponse.verify|verify} messages.
                     * @param message CompleteQueryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICompleteQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompleteQueryResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryResponse.verify|verify} messages.
                     * @param message CompleteQueryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICompleteQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompleteQueryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompleteQueryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompleteQueryResponse;

                    /**
                     * Decodes a CompleteQueryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompleteQueryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompleteQueryResponse;

                    /**
                     * Verifies a CompleteQueryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompleteQueryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompleteQueryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompleteQueryResponse;

                    /**
                     * Creates a plain object from a CompleteQueryResponse message. Also converts values to other types if specified.
                     * @param message CompleteQueryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CompleteQueryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompleteQueryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompleteQueryResponse {

                    /** Properties of a CompletionResult. */
                    interface ICompletionResult {

                        /** CompletionResult suggestion */
                        suggestion?: (string|null);

                        /** CompletionResult type */
                        type?: (google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType|null);

                        /** CompletionResult imageUri */
                        imageUri?: (string|null);
                    }

                    /** Represents a CompletionResult. */
                    class CompletionResult implements ICompletionResult {

                        /**
                         * Constructs a new CompletionResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult);

                        /** CompletionResult suggestion. */
                        public suggestion: string;

                        /** CompletionResult type. */
                        public type: google.cloud.talent.v4beta1.CompleteQueryRequest.CompletionType;

                        /** CompletionResult imageUri. */
                        public imageUri: string;

                        /**
                         * Creates a new CompletionResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompletionResult instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult): google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult;

                        /**
                         * Encodes the specified CompletionResult message. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult.verify|verify} messages.
                         * @param message CompletionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompletionResult message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult.verify|verify} messages.
                         * @param message CompletionResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.CompleteQueryResponse.ICompletionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompletionResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompletionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult;

                        /**
                         * Decodes a CompletionResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompletionResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult;

                        /**
                         * Verifies a CompletionResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompletionResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompletionResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult;

                        /**
                         * Creates a plain object from a CompletionResult message. Also converts values to other types if specified.
                         * @param message CompletionResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.CompleteQueryResponse.CompletionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompletionResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents an EventService */
                class EventService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new EventService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new EventService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EventService;

                    /**
                     * Calls CreateClientEvent.
                     * @param request CreateClientEventRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClientEvent
                     */
                    public createClientEvent(request: google.cloud.talent.v4beta1.ICreateClientEventRequest, callback: google.cloud.talent.v4beta1.EventService.CreateClientEventCallback): void;

                    /**
                     * Calls CreateClientEvent.
                     * @param request CreateClientEventRequest message or plain object
                     * @returns Promise
                     */
                    public createClientEvent(request: google.cloud.talent.v4beta1.ICreateClientEventRequest): Promise<google.cloud.talent.v4beta1.ClientEvent>;
                }

                namespace EventService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.EventService#createClientEvent}.
                     * @param error Error, if any
                     * @param [response] ClientEvent
                     */
                    type CreateClientEventCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ClientEvent) => void;
                }

                /** Properties of a CreateClientEventRequest. */
                interface ICreateClientEventRequest {

                    /** CreateClientEventRequest parent */
                    parent?: (string|null);

                    /** CreateClientEventRequest clientEvent */
                    clientEvent?: (google.cloud.talent.v4beta1.IClientEvent|null);
                }

                /** Represents a CreateClientEventRequest. */
                class CreateClientEventRequest implements ICreateClientEventRequest {

                    /**
                     * Constructs a new CreateClientEventRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateClientEventRequest);

                    /** CreateClientEventRequest parent. */
                    public parent: string;

                    /** CreateClientEventRequest clientEvent. */
                    public clientEvent?: (google.cloud.talent.v4beta1.IClientEvent|null);

                    /**
                     * Creates a new CreateClientEventRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClientEventRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateClientEventRequest): google.cloud.talent.v4beta1.CreateClientEventRequest;

                    /**
                     * Encodes the specified CreateClientEventRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateClientEventRequest.verify|verify} messages.
                     * @param message CreateClientEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateClientEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClientEventRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateClientEventRequest.verify|verify} messages.
                     * @param message CreateClientEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateClientEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClientEventRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClientEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateClientEventRequest;

                    /**
                     * Decodes a CreateClientEventRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClientEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateClientEventRequest;

                    /**
                     * Verifies a CreateClientEventRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClientEventRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClientEventRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateClientEventRequest;

                    /**
                     * Creates a plain object from a CreateClientEventRequest message. Also converts values to other types if specified.
                     * @param message CreateClientEventRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateClientEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClientEventRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientEvent. */
                interface IClientEvent {

                    /** ClientEvent requestId */
                    requestId?: (string|null);

                    /** ClientEvent eventId */
                    eventId?: (string|null);

                    /** ClientEvent createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientEvent jobEvent */
                    jobEvent?: (google.cloud.talent.v4beta1.IJobEvent|null);

                    /** ClientEvent profileEvent */
                    profileEvent?: (google.cloud.talent.v4beta1.IProfileEvent|null);

                    /** ClientEvent eventNotes */
                    eventNotes?: (string|null);
                }

                /** Represents a ClientEvent. */
                class ClientEvent implements IClientEvent {

                    /**
                     * Constructs a new ClientEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IClientEvent);

                    /** ClientEvent requestId. */
                    public requestId: string;

                    /** ClientEvent eventId. */
                    public eventId: string;

                    /** ClientEvent createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ClientEvent jobEvent. */
                    public jobEvent?: (google.cloud.talent.v4beta1.IJobEvent|null);

                    /** ClientEvent profileEvent. */
                    public profileEvent?: (google.cloud.talent.v4beta1.IProfileEvent|null);

                    /** ClientEvent eventNotes. */
                    public eventNotes: string;

                    /** ClientEvent event. */
                    public event?: ("jobEvent"|"profileEvent");

                    /**
                     * Creates a new ClientEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientEvent instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IClientEvent): google.cloud.talent.v4beta1.ClientEvent;

                    /**
                     * Encodes the specified ClientEvent message. Does not implicitly {@link google.cloud.talent.v4beta1.ClientEvent.verify|verify} messages.
                     * @param message ClientEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IClientEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientEvent message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ClientEvent.verify|verify} messages.
                     * @param message ClientEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IClientEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ClientEvent;

                    /**
                     * Decodes a ClientEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ClientEvent;

                    /**
                     * Verifies a ClientEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ClientEvent;

                    /**
                     * Creates a plain object from a ClientEvent message. Also converts values to other types if specified.
                     * @param message ClientEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ClientEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobEvent. */
                interface IJobEvent {

                    /** JobEvent type */
                    type?: (google.cloud.talent.v4beta1.JobEvent.JobEventType|null);

                    /** JobEvent jobs */
                    jobs?: (string[]|null);

                    /** JobEvent profile */
                    profile?: (string|null);
                }

                /** Represents a JobEvent. */
                class JobEvent implements IJobEvent {

                    /**
                     * Constructs a new JobEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IJobEvent);

                    /** JobEvent type. */
                    public type: google.cloud.talent.v4beta1.JobEvent.JobEventType;

                    /** JobEvent jobs. */
                    public jobs: string[];

                    /** JobEvent profile. */
                    public profile: string;

                    /**
                     * Creates a new JobEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobEvent instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IJobEvent): google.cloud.talent.v4beta1.JobEvent;

                    /**
                     * Encodes the specified JobEvent message. Does not implicitly {@link google.cloud.talent.v4beta1.JobEvent.verify|verify} messages.
                     * @param message JobEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IJobEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobEvent message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.JobEvent.verify|verify} messages.
                     * @param message JobEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IJobEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.JobEvent;

                    /**
                     * Decodes a JobEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.JobEvent;

                    /**
                     * Verifies a JobEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.JobEvent;

                    /**
                     * Creates a plain object from a JobEvent message. Also converts values to other types if specified.
                     * @param message JobEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.JobEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace JobEvent {

                    /** JobEventType enum. */
                    enum JobEventType {
                        JOB_EVENT_TYPE_UNSPECIFIED = 0,
                        IMPRESSION = 1,
                        VIEW = 2,
                        VIEW_REDIRECT = 3,
                        APPLICATION_START = 4,
                        APPLICATION_FINISH = 5,
                        APPLICATION_QUICK_SUBMISSION = 6,
                        APPLICATION_REDIRECT = 7,
                        APPLICATION_START_FROM_SEARCH = 8,
                        APPLICATION_REDIRECT_FROM_SEARCH = 9,
                        APPLICATION_COMPANY_SUBMIT = 10,
                        BOOKMARK = 11,
                        NOTIFICATION = 12,
                        HIRED = 13,
                        SENT_CV = 14,
                        INTERVIEW_GRANTED = 15
                    }
                }

                /** Properties of a ProfileEvent. */
                interface IProfileEvent {

                    /** ProfileEvent type */
                    type?: (google.cloud.talent.v4beta1.ProfileEvent.ProfileEventType|null);

                    /** ProfileEvent profiles */
                    profiles?: (string[]|null);

                    /** ProfileEvent jobs */
                    jobs?: (string[]|null);
                }

                /** Represents a ProfileEvent. */
                class ProfileEvent implements IProfileEvent {

                    /**
                     * Constructs a new ProfileEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IProfileEvent);

                    /** ProfileEvent type. */
                    public type: google.cloud.talent.v4beta1.ProfileEvent.ProfileEventType;

                    /** ProfileEvent profiles. */
                    public profiles: string[];

                    /** ProfileEvent jobs. */
                    public jobs: string[];

                    /**
                     * Creates a new ProfileEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProfileEvent instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IProfileEvent): google.cloud.talent.v4beta1.ProfileEvent;

                    /**
                     * Encodes the specified ProfileEvent message. Does not implicitly {@link google.cloud.talent.v4beta1.ProfileEvent.verify|verify} messages.
                     * @param message ProfileEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IProfileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProfileEvent message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ProfileEvent.verify|verify} messages.
                     * @param message ProfileEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IProfileEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProfileEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProfileEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ProfileEvent;

                    /**
                     * Decodes a ProfileEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProfileEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ProfileEvent;

                    /**
                     * Verifies a ProfileEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProfileEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProfileEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ProfileEvent;

                    /**
                     * Creates a plain object from a ProfileEvent message. Also converts values to other types if specified.
                     * @param message ProfileEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ProfileEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProfileEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ProfileEvent {

                    /** ProfileEventType enum. */
                    enum ProfileEventType {
                        PROFILE_EVENT_TYPE_UNSPECIFIED = 0,
                        IMPRESSION = 1,
                        VIEW = 2,
                        BOOKMARK = 3
                    }
                }

                /** Represents a JobService */
                class JobService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new JobService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new JobService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): JobService;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.talent.v4beta1.ICreateJobRequest, callback: google.cloud.talent.v4beta1.JobService.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.talent.v4beta1.ICreateJobRequest): Promise<google.cloud.talent.v4beta1.Job>;

                    /**
                     * Calls BatchCreateJobs.
                     * @param request BatchCreateJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchCreateJobs(request: google.cloud.talent.v4beta1.IBatchCreateJobsRequest, callback: google.cloud.talent.v4beta1.JobService.BatchCreateJobsCallback): void;

                    /**
                     * Calls BatchCreateJobs.
                     * @param request BatchCreateJobsRequest message or plain object
                     * @returns Promise
                     */
                    public batchCreateJobs(request: google.cloud.talent.v4beta1.IBatchCreateJobsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.talent.v4beta1.IGetJobRequest, callback: google.cloud.talent.v4beta1.JobService.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.talent.v4beta1.IGetJobRequest): Promise<google.cloud.talent.v4beta1.Job>;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public updateJob(request: google.cloud.talent.v4beta1.IUpdateJobRequest, callback: google.cloud.talent.v4beta1.JobService.UpdateJobCallback): void;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateJob(request: google.cloud.talent.v4beta1.IUpdateJobRequest): Promise<google.cloud.talent.v4beta1.Job>;

                    /**
                     * Calls BatchUpdateJobs.
                     * @param request BatchUpdateJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchUpdateJobs(request: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest, callback: google.cloud.talent.v4beta1.JobService.BatchUpdateJobsCallback): void;

                    /**
                     * Calls BatchUpdateJobs.
                     * @param request BatchUpdateJobsRequest message or plain object
                     * @returns Promise
                     */
                    public batchUpdateJobs(request: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteJob(request: google.cloud.talent.v4beta1.IDeleteJobRequest, callback: google.cloud.talent.v4beta1.JobService.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.talent.v4beta1.IDeleteJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls BatchDeleteJobs.
                     * @param request BatchDeleteJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public batchDeleteJobs(request: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest, callback: google.cloud.talent.v4beta1.JobService.BatchDeleteJobsCallback): void;

                    /**
                     * Calls BatchDeleteJobs.
                     * @param request BatchDeleteJobsRequest message or plain object
                     * @returns Promise
                     */
                    public batchDeleteJobs(request: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.talent.v4beta1.IListJobsRequest, callback: google.cloud.talent.v4beta1.JobService.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.talent.v4beta1.IListJobsRequest): Promise<google.cloud.talent.v4beta1.ListJobsResponse>;

                    /**
                     * Calls SearchJobs.
                     * @param request SearchJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchJobsResponse
                     */
                    public searchJobs(request: google.cloud.talent.v4beta1.ISearchJobsRequest, callback: google.cloud.talent.v4beta1.JobService.SearchJobsCallback): void;

                    /**
                     * Calls SearchJobs.
                     * @param request SearchJobsRequest message or plain object
                     * @returns Promise
                     */
                    public searchJobs(request: google.cloud.talent.v4beta1.ISearchJobsRequest): Promise<google.cloud.talent.v4beta1.SearchJobsResponse>;

                    /**
                     * Calls SearchJobsForAlert.
                     * @param request SearchJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchJobsResponse
                     */
                    public searchJobsForAlert(request: google.cloud.talent.v4beta1.ISearchJobsRequest, callback: google.cloud.talent.v4beta1.JobService.SearchJobsForAlertCallback): void;

                    /**
                     * Calls SearchJobsForAlert.
                     * @param request SearchJobsRequest message or plain object
                     * @returns Promise
                     */
                    public searchJobsForAlert(request: google.cloud.talent.v4beta1.ISearchJobsRequest): Promise<google.cloud.talent.v4beta1.SearchJobsResponse>;
                }

                namespace JobService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#batchCreateJobs}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchCreateJobsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#updateJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type UpdateJobCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#batchUpdateJobs}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchUpdateJobsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#deleteJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#batchDeleteJobs}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type BatchDeleteJobsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#searchJobs}.
                     * @param error Error, if any
                     * @param [response] SearchJobsResponse
                     */
                    type SearchJobsCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.SearchJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.JobService#searchJobsForAlert}.
                     * @param error Error, if any
                     * @param [response] SearchJobsResponse
                     */
                    type SearchJobsForAlertCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.SearchJobsResponse) => void;
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.talent.v4beta1.IJob|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.talent.v4beta1.IJob|null);

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateJobRequest): google.cloud.talent.v4beta1.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateJobRequest;

                    /**
                     * Verifies a CreateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IGetJobRequest): google.cloud.talent.v4beta1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateJobRequest. */
                interface IUpdateJobRequest {

                    /** UpdateJobRequest job */
                    job?: (google.cloud.talent.v4beta1.IJob|null);

                    /** UpdateJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateJobRequest. */
                class UpdateJobRequest implements IUpdateJobRequest {

                    /**
                     * Constructs a new UpdateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IUpdateJobRequest);

                    /** UpdateJobRequest job. */
                    public job?: (google.cloud.talent.v4beta1.IJob|null);

                    /** UpdateJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateJobRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IUpdateJobRequest): google.cloud.talent.v4beta1.UpdateJobRequest;

                    /**
                     * Encodes the specified UpdateJobRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateJobRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.UpdateJobRequest;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.UpdateJobRequest;

                    /**
                     * Verifies an UpdateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.UpdateJobRequest;

                    /**
                     * Creates a plain object from an UpdateJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.UpdateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeleteJobRequest): google.cloud.talent.v4beta1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeleteJobRequest;

                    /**
                     * Verifies a DeleteJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDeleteJobsRequest. */
                interface IBatchDeleteJobsRequest {

                    /** BatchDeleteJobsRequest parent */
                    parent?: (string|null);

                    /** BatchDeleteJobsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a BatchDeleteJobsRequest. */
                class BatchDeleteJobsRequest implements IBatchDeleteJobsRequest {

                    /**
                     * Constructs a new BatchDeleteJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest);

                    /** BatchDeleteJobsRequest parent. */
                    public parent: string;

                    /** BatchDeleteJobsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new BatchDeleteJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDeleteJobsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest): google.cloud.talent.v4beta1.BatchDeleteJobsRequest;

                    /**
                     * Encodes the specified BatchDeleteJobsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.BatchDeleteJobsRequest.verify|verify} messages.
                     * @param message BatchDeleteJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDeleteJobsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.BatchDeleteJobsRequest.verify|verify} messages.
                     * @param message BatchDeleteJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IBatchDeleteJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDeleteJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDeleteJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.BatchDeleteJobsRequest;

                    /**
                     * Decodes a BatchDeleteJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDeleteJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.BatchDeleteJobsRequest;

                    /**
                     * Verifies a BatchDeleteJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDeleteJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDeleteJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.BatchDeleteJobsRequest;

                    /**
                     * Creates a plain object from a BatchDeleteJobsRequest message. Also converts values to other types if specified.
                     * @param message BatchDeleteJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.BatchDeleteJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDeleteJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

                    /** ListJobsRequest filter */
                    filter?: (string|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest jobView */
                    jobView?: (google.cloud.talent.v4beta1.JobView|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest filter. */
                    public filter: string;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest jobView. */
                    public jobView: google.cloud.talent.v4beta1.JobView;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListJobsRequest): google.cloud.talent.v4beta1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** JobView enum. */
                enum JobView {
                    JOB_VIEW_UNSPECIFIED = 0,
                    JOB_VIEW_ID_ONLY = 1,
                    JOB_VIEW_MINIMAL = 2,
                    JOB_VIEW_SMALL = 3,
                    JOB_VIEW_FULL = 4
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.talent.v4beta1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListJobsResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.talent.v4beta1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListJobsResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListJobsResponse): google.cloud.talent.v4beta1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchJobsRequest. */
                interface ISearchJobsRequest {

                    /** SearchJobsRequest parent */
                    parent?: (string|null);

                    /** SearchJobsRequest searchMode */
                    searchMode?: (google.cloud.talent.v4beta1.SearchJobsRequest.SearchMode|null);

                    /** SearchJobsRequest requestMetadata */
                    requestMetadata?: (google.cloud.talent.v4beta1.IRequestMetadata|null);

                    /** SearchJobsRequest jobQuery */
                    jobQuery?: (google.cloud.talent.v4beta1.IJobQuery|null);

                    /** SearchJobsRequest enableBroadening */
                    enableBroadening?: (boolean|null);

                    /** SearchJobsRequest requirePreciseResultSize */
                    requirePreciseResultSize?: (boolean|null);

                    /** SearchJobsRequest histogramQueries */
                    histogramQueries?: (google.cloud.talent.v4beta1.IHistogramQuery[]|null);

                    /** SearchJobsRequest jobView */
                    jobView?: (google.cloud.talent.v4beta1.JobView|null);

                    /** SearchJobsRequest offset */
                    offset?: (number|null);

                    /** SearchJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchJobsRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchJobsRequest orderBy */
                    orderBy?: (string|null);

                    /** SearchJobsRequest diversificationLevel */
                    diversificationLevel?: (google.cloud.talent.v4beta1.SearchJobsRequest.DiversificationLevel|null);

                    /** SearchJobsRequest customRankingInfo */
                    customRankingInfo?: (google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo|null);

                    /** SearchJobsRequest disableKeywordMatch */
                    disableKeywordMatch?: (boolean|null);
                }

                /** Represents a SearchJobsRequest. */
                class SearchJobsRequest implements ISearchJobsRequest {

                    /**
                     * Constructs a new SearchJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISearchJobsRequest);

                    /** SearchJobsRequest parent. */
                    public parent: string;

                    /** SearchJobsRequest searchMode. */
                    public searchMode: google.cloud.talent.v4beta1.SearchJobsRequest.SearchMode;

                    /** SearchJobsRequest requestMetadata. */
                    public requestMetadata?: (google.cloud.talent.v4beta1.IRequestMetadata|null);

                    /** SearchJobsRequest jobQuery. */
                    public jobQuery?: (google.cloud.talent.v4beta1.IJobQuery|null);

                    /** SearchJobsRequest enableBroadening. */
                    public enableBroadening: boolean;

                    /** SearchJobsRequest requirePreciseResultSize. */
                    public requirePreciseResultSize: boolean;

                    /** SearchJobsRequest histogramQueries. */
                    public histogramQueries: google.cloud.talent.v4beta1.IHistogramQuery[];

                    /** SearchJobsRequest jobView. */
                    public jobView: google.cloud.talent.v4beta1.JobView;

                    /** SearchJobsRequest offset. */
                    public offset: number;

                    /** SearchJobsRequest pageSize. */
                    public pageSize: number;

                    /** SearchJobsRequest pageToken. */
                    public pageToken: string;

                    /** SearchJobsRequest orderBy. */
                    public orderBy: string;

                    /** SearchJobsRequest diversificationLevel. */
                    public diversificationLevel: google.cloud.talent.v4beta1.SearchJobsRequest.DiversificationLevel;

                    /** SearchJobsRequest customRankingInfo. */
                    public customRankingInfo?: (google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo|null);

                    /** SearchJobsRequest disableKeywordMatch. */
                    public disableKeywordMatch: boolean;

                    /**
                     * Creates a new SearchJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchJobsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISearchJobsRequest): google.cloud.talent.v4beta1.SearchJobsRequest;

                    /**
                     * Encodes the specified SearchJobsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsRequest.verify|verify} messages.
                     * @param message SearchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISearchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchJobsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsRequest.verify|verify} messages.
                     * @param message SearchJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISearchJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchJobsRequest;

                    /**
                     * Decodes a SearchJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchJobsRequest;

                    /**
                     * Verifies a SearchJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchJobsRequest;

                    /**
                     * Creates a plain object from a SearchJobsRequest message. Also converts values to other types if specified.
                     * @param message SearchJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SearchJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchJobsRequest {

                    /** Properties of a CustomRankingInfo. */
                    interface ICustomRankingInfo {

                        /** CustomRankingInfo importanceLevel */
                        importanceLevel?: (google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo.ImportanceLevel|null);

                        /** CustomRankingInfo rankingExpression */
                        rankingExpression?: (string|null);
                    }

                    /** Represents a CustomRankingInfo. */
                    class CustomRankingInfo implements ICustomRankingInfo {

                        /**
                         * Constructs a new CustomRankingInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo);

                        /** CustomRankingInfo importanceLevel. */
                        public importanceLevel: google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo.ImportanceLevel;

                        /** CustomRankingInfo rankingExpression. */
                        public rankingExpression: string;

                        /**
                         * Creates a new CustomRankingInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomRankingInfo instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo): google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo;

                        /**
                         * Encodes the specified CustomRankingInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo.verify|verify} messages.
                         * @param message CustomRankingInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomRankingInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo.verify|verify} messages.
                         * @param message CustomRankingInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.SearchJobsRequest.ICustomRankingInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomRankingInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomRankingInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo;

                        /**
                         * Decodes a CustomRankingInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomRankingInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo;

                        /**
                         * Verifies a CustomRankingInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomRankingInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomRankingInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo;

                        /**
                         * Creates a plain object from a CustomRankingInfo message. Also converts values to other types if specified.
                         * @param message CustomRankingInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomRankingInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace CustomRankingInfo {

                        /** ImportanceLevel enum. */
                        enum ImportanceLevel {
                            IMPORTANCE_LEVEL_UNSPECIFIED = 0,
                            NONE = 1,
                            LOW = 2,
                            MILD = 3,
                            MEDIUM = 4,
                            HIGH = 5,
                            EXTREME = 6
                        }
                    }

                    /** SearchMode enum. */
                    enum SearchMode {
                        SEARCH_MODE_UNSPECIFIED = 0,
                        JOB_SEARCH = 1,
                        FEATURED_JOB_SEARCH = 2
                    }

                    /** DiversificationLevel enum. */
                    enum DiversificationLevel {
                        DIVERSIFICATION_LEVEL_UNSPECIFIED = 0,
                        DISABLED = 1,
                        SIMPLE = 2
                    }
                }

                /** Properties of a SearchJobsResponse. */
                interface ISearchJobsResponse {

                    /** SearchJobsResponse matchingJobs */
                    matchingJobs?: (google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob[]|null);

                    /** SearchJobsResponse histogramQueryResults */
                    histogramQueryResults?: (google.cloud.talent.v4beta1.IHistogramQueryResult[]|null);

                    /** SearchJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** SearchJobsResponse locationFilters */
                    locationFilters?: (google.cloud.talent.v4beta1.ILocation[]|null);

                    /** SearchJobsResponse estimatedTotalSize */
                    estimatedTotalSize?: (number|null);

                    /** SearchJobsResponse totalSize */
                    totalSize?: (number|null);

                    /** SearchJobsResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /** SearchJobsResponse broadenedQueryJobsCount */
                    broadenedQueryJobsCount?: (number|null);

                    /** SearchJobsResponse spellCorrection */
                    spellCorrection?: (google.cloud.talent.v4beta1.ISpellingCorrection|null);
                }

                /** Represents a SearchJobsResponse. */
                class SearchJobsResponse implements ISearchJobsResponse {

                    /**
                     * Constructs a new SearchJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISearchJobsResponse);

                    /** SearchJobsResponse matchingJobs. */
                    public matchingJobs: google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob[];

                    /** SearchJobsResponse histogramQueryResults. */
                    public histogramQueryResults: google.cloud.talent.v4beta1.IHistogramQueryResult[];

                    /** SearchJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** SearchJobsResponse locationFilters. */
                    public locationFilters: google.cloud.talent.v4beta1.ILocation[];

                    /** SearchJobsResponse estimatedTotalSize. */
                    public estimatedTotalSize: number;

                    /** SearchJobsResponse totalSize. */
                    public totalSize: number;

                    /** SearchJobsResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /** SearchJobsResponse broadenedQueryJobsCount. */
                    public broadenedQueryJobsCount: number;

                    /** SearchJobsResponse spellCorrection. */
                    public spellCorrection?: (google.cloud.talent.v4beta1.ISpellingCorrection|null);

                    /**
                     * Creates a new SearchJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchJobsResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISearchJobsResponse): google.cloud.talent.v4beta1.SearchJobsResponse;

                    /**
                     * Encodes the specified SearchJobsResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.verify|verify} messages.
                     * @param message SearchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISearchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchJobsResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.verify|verify} messages.
                     * @param message SearchJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISearchJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchJobsResponse;

                    /**
                     * Decodes a SearchJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchJobsResponse;

                    /**
                     * Verifies a SearchJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchJobsResponse;

                    /**
                     * Creates a plain object from a SearchJobsResponse message. Also converts values to other types if specified.
                     * @param message SearchJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SearchJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchJobsResponse {

                    /** Properties of a MatchingJob. */
                    interface IMatchingJob {

                        /** MatchingJob job */
                        job?: (google.cloud.talent.v4beta1.IJob|null);

                        /** MatchingJob jobSummary */
                        jobSummary?: (string|null);

                        /** MatchingJob jobTitleSnippet */
                        jobTitleSnippet?: (string|null);

                        /** MatchingJob searchTextSnippet */
                        searchTextSnippet?: (string|null);

                        /** MatchingJob commuteInfo */
                        commuteInfo?: (google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo|null);
                    }

                    /** Represents a MatchingJob. */
                    class MatchingJob implements IMatchingJob {

                        /**
                         * Constructs a new MatchingJob.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob);

                        /** MatchingJob job. */
                        public job?: (google.cloud.talent.v4beta1.IJob|null);

                        /** MatchingJob jobSummary. */
                        public jobSummary: string;

                        /** MatchingJob jobTitleSnippet. */
                        public jobTitleSnippet: string;

                        /** MatchingJob searchTextSnippet. */
                        public searchTextSnippet: string;

                        /** MatchingJob commuteInfo. */
                        public commuteInfo?: (google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo|null);

                        /**
                         * Creates a new MatchingJob instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MatchingJob instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob): google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob;

                        /**
                         * Encodes the specified MatchingJob message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob.verify|verify} messages.
                         * @param message MatchingJob message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MatchingJob message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob.verify|verify} messages.
                         * @param message MatchingJob message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.SearchJobsResponse.IMatchingJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MatchingJob message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MatchingJob
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob;

                        /**
                         * Decodes a MatchingJob message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MatchingJob
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob;

                        /**
                         * Verifies a MatchingJob message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MatchingJob message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MatchingJob
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob;

                        /**
                         * Creates a plain object from a MatchingJob message. Also converts values to other types if specified.
                         * @param message MatchingJob
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MatchingJob to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommuteInfo. */
                    interface ICommuteInfo {

                        /** CommuteInfo jobLocation */
                        jobLocation?: (google.cloud.talent.v4beta1.ILocation|null);

                        /** CommuteInfo travelDuration */
                        travelDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a CommuteInfo. */
                    class CommuteInfo implements ICommuteInfo {

                        /**
                         * Constructs a new CommuteInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo);

                        /** CommuteInfo jobLocation. */
                        public jobLocation?: (google.cloud.talent.v4beta1.ILocation|null);

                        /** CommuteInfo travelDuration. */
                        public travelDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new CommuteInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommuteInfo instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo): google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo;

                        /**
                         * Encodes the specified CommuteInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo.verify|verify} messages.
                         * @param message CommuteInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CommuteInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo.verify|verify} messages.
                         * @param message CommuteInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.SearchJobsResponse.ICommuteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommuteInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommuteInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo;

                        /**
                         * Decodes a CommuteInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CommuteInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo;

                        /**
                         * Verifies a CommuteInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CommuteInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommuteInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo;

                        /**
                         * Creates a plain object from a CommuteInfo message. Also converts values to other types if specified.
                         * @param message CommuteInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommuteInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a BatchCreateJobsRequest. */
                interface IBatchCreateJobsRequest {

                    /** BatchCreateJobsRequest parent */
                    parent?: (string|null);

                    /** BatchCreateJobsRequest jobs */
                    jobs?: (google.cloud.talent.v4beta1.IJob[]|null);
                }

                /** Represents a BatchCreateJobsRequest. */
                class BatchCreateJobsRequest implements IBatchCreateJobsRequest {

                    /**
                     * Constructs a new BatchCreateJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IBatchCreateJobsRequest);

                    /** BatchCreateJobsRequest parent. */
                    public parent: string;

                    /** BatchCreateJobsRequest jobs. */
                    public jobs: google.cloud.talent.v4beta1.IJob[];

                    /**
                     * Creates a new BatchCreateJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchCreateJobsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IBatchCreateJobsRequest): google.cloud.talent.v4beta1.BatchCreateJobsRequest;

                    /**
                     * Encodes the specified BatchCreateJobsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.BatchCreateJobsRequest.verify|verify} messages.
                     * @param message BatchCreateJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IBatchCreateJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchCreateJobsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.BatchCreateJobsRequest.verify|verify} messages.
                     * @param message BatchCreateJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IBatchCreateJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchCreateJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchCreateJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.BatchCreateJobsRequest;

                    /**
                     * Decodes a BatchCreateJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchCreateJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.BatchCreateJobsRequest;

                    /**
                     * Verifies a BatchCreateJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchCreateJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchCreateJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.BatchCreateJobsRequest;

                    /**
                     * Creates a plain object from a BatchCreateJobsRequest message. Also converts values to other types if specified.
                     * @param message BatchCreateJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.BatchCreateJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchCreateJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchUpdateJobsRequest. */
                interface IBatchUpdateJobsRequest {

                    /** BatchUpdateJobsRequest parent */
                    parent?: (string|null);

                    /** BatchUpdateJobsRequest jobs */
                    jobs?: (google.cloud.talent.v4beta1.IJob[]|null);

                    /** BatchUpdateJobsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a BatchUpdateJobsRequest. */
                class BatchUpdateJobsRequest implements IBatchUpdateJobsRequest {

                    /**
                     * Constructs a new BatchUpdateJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest);

                    /** BatchUpdateJobsRequest parent. */
                    public parent: string;

                    /** BatchUpdateJobsRequest jobs. */
                    public jobs: google.cloud.talent.v4beta1.IJob[];

                    /** BatchUpdateJobsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new BatchUpdateJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchUpdateJobsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest): google.cloud.talent.v4beta1.BatchUpdateJobsRequest;

                    /**
                     * Encodes the specified BatchUpdateJobsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.BatchUpdateJobsRequest.verify|verify} messages.
                     * @param message BatchUpdateJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchUpdateJobsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.BatchUpdateJobsRequest.verify|verify} messages.
                     * @param message BatchUpdateJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IBatchUpdateJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchUpdateJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchUpdateJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.BatchUpdateJobsRequest;

                    /**
                     * Decodes a BatchUpdateJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchUpdateJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.BatchUpdateJobsRequest;

                    /**
                     * Verifies a BatchUpdateJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchUpdateJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchUpdateJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.BatchUpdateJobsRequest;

                    /**
                     * Creates a plain object from a BatchUpdateJobsRequest message. Also converts values to other types if specified.
                     * @param message BatchUpdateJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.BatchUpdateJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchUpdateJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JobOperationResult. */
                interface IJobOperationResult {

                    /** JobOperationResult jobResults */
                    jobResults?: (google.cloud.talent.v4beta1.JobOperationResult.IJobResult[]|null);
                }

                /** Represents a JobOperationResult. */
                class JobOperationResult implements IJobOperationResult {

                    /**
                     * Constructs a new JobOperationResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IJobOperationResult);

                    /** JobOperationResult jobResults. */
                    public jobResults: google.cloud.talent.v4beta1.JobOperationResult.IJobResult[];

                    /**
                     * Creates a new JobOperationResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobOperationResult instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IJobOperationResult): google.cloud.talent.v4beta1.JobOperationResult;

                    /**
                     * Encodes the specified JobOperationResult message. Does not implicitly {@link google.cloud.talent.v4beta1.JobOperationResult.verify|verify} messages.
                     * @param message JobOperationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IJobOperationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobOperationResult message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.JobOperationResult.verify|verify} messages.
                     * @param message JobOperationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IJobOperationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobOperationResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobOperationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.JobOperationResult;

                    /**
                     * Decodes a JobOperationResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobOperationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.JobOperationResult;

                    /**
                     * Verifies a JobOperationResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobOperationResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobOperationResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.JobOperationResult;

                    /**
                     * Creates a plain object from a JobOperationResult message. Also converts values to other types if specified.
                     * @param message JobOperationResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.JobOperationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobOperationResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace JobOperationResult {

                    /** Properties of a JobResult. */
                    interface IJobResult {

                        /** JobResult job */
                        job?: (google.cloud.talent.v4beta1.IJob|null);

                        /** JobResult status */
                        status?: (google.rpc.IStatus|null);
                    }

                    /** Represents a JobResult. */
                    class JobResult implements IJobResult {

                        /**
                         * Constructs a new JobResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.JobOperationResult.IJobResult);

                        /** JobResult job. */
                        public job?: (google.cloud.talent.v4beta1.IJob|null);

                        /** JobResult status. */
                        public status?: (google.rpc.IStatus|null);

                        /**
                         * Creates a new JobResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobResult instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.JobOperationResult.IJobResult): google.cloud.talent.v4beta1.JobOperationResult.JobResult;

                        /**
                         * Encodes the specified JobResult message. Does not implicitly {@link google.cloud.talent.v4beta1.JobOperationResult.JobResult.verify|verify} messages.
                         * @param message JobResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.JobOperationResult.IJobResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobResult message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.JobOperationResult.JobResult.verify|verify} messages.
                         * @param message JobResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.JobOperationResult.IJobResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.JobOperationResult.JobResult;

                        /**
                         * Decodes a JobResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.JobOperationResult.JobResult;

                        /**
                         * Verifies a JobResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.JobOperationResult.JobResult;

                        /**
                         * Creates a plain object from a JobResult message. Also converts values to other types if specified.
                         * @param message JobResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.JobOperationResult.JobResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a JobQuery. */
                interface IJobQuery {

                    /** JobQuery query */
                    query?: (string|null);

                    /** JobQuery companies */
                    companies?: (string[]|null);

                    /** JobQuery locationFilters */
                    locationFilters?: (google.cloud.talent.v4beta1.ILocationFilter[]|null);

                    /** JobQuery jobCategories */
                    jobCategories?: (google.cloud.talent.v4beta1.JobCategory[]|null);

                    /** JobQuery commuteFilter */
                    commuteFilter?: (google.cloud.talent.v4beta1.ICommuteFilter|null);

                    /** JobQuery companyDisplayNames */
                    companyDisplayNames?: (string[]|null);

                    /** JobQuery compensationFilter */
                    compensationFilter?: (google.cloud.talent.v4beta1.ICompensationFilter|null);

                    /** JobQuery customAttributeFilter */
                    customAttributeFilter?: (string|null);

                    /** JobQuery disableSpellCheck */
                    disableSpellCheck?: (boolean|null);

                    /** JobQuery employmentTypes */
                    employmentTypes?: (google.cloud.talent.v4beta1.EmploymentType[]|null);

                    /** JobQuery languageCodes */
                    languageCodes?: (string[]|null);

                    /** JobQuery publishTimeRange */
                    publishTimeRange?: (google.cloud.talent.v4beta1.ITimestampRange|null);

                    /** JobQuery excludedJobs */
                    excludedJobs?: (string[]|null);
                }

                /** Represents a JobQuery. */
                class JobQuery implements IJobQuery {

                    /**
                     * Constructs a new JobQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IJobQuery);

                    /** JobQuery query. */
                    public query: string;

                    /** JobQuery companies. */
                    public companies: string[];

                    /** JobQuery locationFilters. */
                    public locationFilters: google.cloud.talent.v4beta1.ILocationFilter[];

                    /** JobQuery jobCategories. */
                    public jobCategories: google.cloud.talent.v4beta1.JobCategory[];

                    /** JobQuery commuteFilter. */
                    public commuteFilter?: (google.cloud.talent.v4beta1.ICommuteFilter|null);

                    /** JobQuery companyDisplayNames. */
                    public companyDisplayNames: string[];

                    /** JobQuery compensationFilter. */
                    public compensationFilter?: (google.cloud.talent.v4beta1.ICompensationFilter|null);

                    /** JobQuery customAttributeFilter. */
                    public customAttributeFilter: string;

                    /** JobQuery disableSpellCheck. */
                    public disableSpellCheck: boolean;

                    /** JobQuery employmentTypes. */
                    public employmentTypes: google.cloud.talent.v4beta1.EmploymentType[];

                    /** JobQuery languageCodes. */
                    public languageCodes: string[];

                    /** JobQuery publishTimeRange. */
                    public publishTimeRange?: (google.cloud.talent.v4beta1.ITimestampRange|null);

                    /** JobQuery excludedJobs. */
                    public excludedJobs: string[];

                    /**
                     * Creates a new JobQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobQuery instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IJobQuery): google.cloud.talent.v4beta1.JobQuery;

                    /**
                     * Encodes the specified JobQuery message. Does not implicitly {@link google.cloud.talent.v4beta1.JobQuery.verify|verify} messages.
                     * @param message JobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobQuery message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.JobQuery.verify|verify} messages.
                     * @param message JobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.JobQuery;

                    /**
                     * Decodes a JobQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.JobQuery;

                    /**
                     * Verifies a JobQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.JobQuery;

                    /**
                     * Creates a plain object from a JobQuery message. Also converts values to other types if specified.
                     * @param message JobQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.JobQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProfileQuery. */
                interface IProfileQuery {

                    /** ProfileQuery query */
                    query?: (string|null);

                    /** ProfileQuery locationFilters */
                    locationFilters?: (google.cloud.talent.v4beta1.ILocationFilter[]|null);

                    /** ProfileQuery jobTitleFilters */
                    jobTitleFilters?: (google.cloud.talent.v4beta1.IJobTitleFilter[]|null);

                    /** ProfileQuery employerFilters */
                    employerFilters?: (google.cloud.talent.v4beta1.IEmployerFilter[]|null);

                    /** ProfileQuery educationFilters */
                    educationFilters?: (google.cloud.talent.v4beta1.IEducationFilter[]|null);

                    /** ProfileQuery skillFilters */
                    skillFilters?: (google.cloud.talent.v4beta1.ISkillFilter[]|null);

                    /** ProfileQuery workExperienceFilter */
                    workExperienceFilter?: (google.cloud.talent.v4beta1.IWorkExperienceFilter[]|null);

                    /** ProfileQuery timeFilters */
                    timeFilters?: (google.cloud.talent.v4beta1.ITimeFilter[]|null);

                    /** ProfileQuery hirableFilter */
                    hirableFilter?: (google.protobuf.IBoolValue|null);

                    /** ProfileQuery applicationDateFilters */
                    applicationDateFilters?: (google.cloud.talent.v4beta1.IApplicationDateFilter[]|null);

                    /** ProfileQuery applicationOutcomeNotesFilters */
                    applicationOutcomeNotesFilters?: (google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter[]|null);

                    /** ProfileQuery applicationJobFilters */
                    applicationJobFilters?: (google.cloud.talent.v4beta1.IApplicationJobFilter[]|null);

                    /** ProfileQuery customAttributeFilter */
                    customAttributeFilter?: (string|null);

                    /** ProfileQuery candidateAvailabilityFilter */
                    candidateAvailabilityFilter?: (google.cloud.talent.v4beta1.ICandidateAvailabilityFilter|null);

                    /** ProfileQuery availabilityFilters */
                    availabilityFilters?: (google.cloud.talent.v4beta1.IAvailabilityFilter[]|null);

                    /** ProfileQuery personNameFilters */
                    personNameFilters?: (google.cloud.talent.v4beta1.IPersonNameFilter[]|null);
                }

                /** Represents a ProfileQuery. */
                class ProfileQuery implements IProfileQuery {

                    /**
                     * Constructs a new ProfileQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IProfileQuery);

                    /** ProfileQuery query. */
                    public query: string;

                    /** ProfileQuery locationFilters. */
                    public locationFilters: google.cloud.talent.v4beta1.ILocationFilter[];

                    /** ProfileQuery jobTitleFilters. */
                    public jobTitleFilters: google.cloud.talent.v4beta1.IJobTitleFilter[];

                    /** ProfileQuery employerFilters. */
                    public employerFilters: google.cloud.talent.v4beta1.IEmployerFilter[];

                    /** ProfileQuery educationFilters. */
                    public educationFilters: google.cloud.talent.v4beta1.IEducationFilter[];

                    /** ProfileQuery skillFilters. */
                    public skillFilters: google.cloud.talent.v4beta1.ISkillFilter[];

                    /** ProfileQuery workExperienceFilter. */
                    public workExperienceFilter: google.cloud.talent.v4beta1.IWorkExperienceFilter[];

                    /** ProfileQuery timeFilters. */
                    public timeFilters: google.cloud.talent.v4beta1.ITimeFilter[];

                    /** ProfileQuery hirableFilter. */
                    public hirableFilter?: (google.protobuf.IBoolValue|null);

                    /** ProfileQuery applicationDateFilters. */
                    public applicationDateFilters: google.cloud.talent.v4beta1.IApplicationDateFilter[];

                    /** ProfileQuery applicationOutcomeNotesFilters. */
                    public applicationOutcomeNotesFilters: google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter[];

                    /** ProfileQuery applicationJobFilters. */
                    public applicationJobFilters: google.cloud.talent.v4beta1.IApplicationJobFilter[];

                    /** ProfileQuery customAttributeFilter. */
                    public customAttributeFilter: string;

                    /** ProfileQuery candidateAvailabilityFilter. */
                    public candidateAvailabilityFilter?: (google.cloud.talent.v4beta1.ICandidateAvailabilityFilter|null);

                    /** ProfileQuery availabilityFilters. */
                    public availabilityFilters: google.cloud.talent.v4beta1.IAvailabilityFilter[];

                    /** ProfileQuery personNameFilters. */
                    public personNameFilters: google.cloud.talent.v4beta1.IPersonNameFilter[];

                    /**
                     * Creates a new ProfileQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProfileQuery instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IProfileQuery): google.cloud.talent.v4beta1.ProfileQuery;

                    /**
                     * Encodes the specified ProfileQuery message. Does not implicitly {@link google.cloud.talent.v4beta1.ProfileQuery.verify|verify} messages.
                     * @param message ProfileQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IProfileQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProfileQuery message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ProfileQuery.verify|verify} messages.
                     * @param message ProfileQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IProfileQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProfileQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProfileQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ProfileQuery;

                    /**
                     * Decodes a ProfileQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProfileQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ProfileQuery;

                    /**
                     * Verifies a ProfileQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProfileQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProfileQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ProfileQuery;

                    /**
                     * Creates a plain object from a ProfileQuery message. Also converts values to other types if specified.
                     * @param message ProfileQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ProfileQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProfileQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocationFilter. */
                interface ILocationFilter {

                    /** LocationFilter address */
                    address?: (string|null);

                    /** LocationFilter regionCode */
                    regionCode?: (string|null);

                    /** LocationFilter latLng */
                    latLng?: (google.type.ILatLng|null);

                    /** LocationFilter distanceInMiles */
                    distanceInMiles?: (number|null);

                    /** LocationFilter telecommutePreference */
                    telecommutePreference?: (google.cloud.talent.v4beta1.LocationFilter.TelecommutePreference|null);

                    /** LocationFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents a LocationFilter. */
                class LocationFilter implements ILocationFilter {

                    /**
                     * Constructs a new LocationFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ILocationFilter);

                    /** LocationFilter address. */
                    public address: string;

                    /** LocationFilter regionCode. */
                    public regionCode: string;

                    /** LocationFilter latLng. */
                    public latLng?: (google.type.ILatLng|null);

                    /** LocationFilter distanceInMiles. */
                    public distanceInMiles: number;

                    /** LocationFilter telecommutePreference. */
                    public telecommutePreference: google.cloud.talent.v4beta1.LocationFilter.TelecommutePreference;

                    /** LocationFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new LocationFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ILocationFilter): google.cloud.talent.v4beta1.LocationFilter;

                    /**
                     * Encodes the specified LocationFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.LocationFilter.verify|verify} messages.
                     * @param message LocationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ILocationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.LocationFilter.verify|verify} messages.
                     * @param message LocationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ILocationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.LocationFilter;

                    /**
                     * Decodes a LocationFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.LocationFilter;

                    /**
                     * Verifies a LocationFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.LocationFilter;

                    /**
                     * Creates a plain object from a LocationFilter message. Also converts values to other types if specified.
                     * @param message LocationFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.LocationFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocationFilter {

                    /** TelecommutePreference enum. */
                    enum TelecommutePreference {
                        TELECOMMUTE_PREFERENCE_UNSPECIFIED = 0,
                        TELECOMMUTE_EXCLUDED = 1,
                        TELECOMMUTE_ALLOWED = 2
                    }
                }

                /** Properties of a CompensationFilter. */
                interface ICompensationFilter {

                    /** CompensationFilter type */
                    type?: (google.cloud.talent.v4beta1.CompensationFilter.FilterType|null);

                    /** CompensationFilter units */
                    units?: (google.cloud.talent.v4beta1.CompensationInfo.CompensationUnit[]|null);

                    /** CompensationFilter range */
                    range?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                    /** CompensationFilter includeJobsWithUnspecifiedCompensationRange */
                    includeJobsWithUnspecifiedCompensationRange?: (boolean|null);
                }

                /** Represents a CompensationFilter. */
                class CompensationFilter implements ICompensationFilter {

                    /**
                     * Constructs a new CompensationFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICompensationFilter);

                    /** CompensationFilter type. */
                    public type: google.cloud.talent.v4beta1.CompensationFilter.FilterType;

                    /** CompensationFilter units. */
                    public units: google.cloud.talent.v4beta1.CompensationInfo.CompensationUnit[];

                    /** CompensationFilter range. */
                    public range?: (google.cloud.talent.v4beta1.CompensationInfo.ICompensationRange|null);

                    /** CompensationFilter includeJobsWithUnspecifiedCompensationRange. */
                    public includeJobsWithUnspecifiedCompensationRange: boolean;

                    /**
                     * Creates a new CompensationFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CompensationFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICompensationFilter): google.cloud.talent.v4beta1.CompensationFilter;

                    /**
                     * Encodes the specified CompensationFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationFilter.verify|verify} messages.
                     * @param message CompensationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICompensationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CompensationFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CompensationFilter.verify|verify} messages.
                     * @param message CompensationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICompensationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CompensationFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompensationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CompensationFilter;

                    /**
                     * Decodes a CompensationFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CompensationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CompensationFilter;

                    /**
                     * Verifies a CompensationFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CompensationFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompensationFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CompensationFilter;

                    /**
                     * Creates a plain object from a CompensationFilter message. Also converts values to other types if specified.
                     * @param message CompensationFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CompensationFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompensationFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CompensationFilter {

                    /** FilterType enum. */
                    enum FilterType {
                        FILTER_TYPE_UNSPECIFIED = 0,
                        UNIT_ONLY = 1,
                        UNIT_AND_AMOUNT = 2,
                        ANNUALIZED_BASE_AMOUNT = 3,
                        ANNUALIZED_TOTAL_AMOUNT = 4
                    }
                }

                /** Properties of a CommuteFilter. */
                interface ICommuteFilter {

                    /** CommuteFilter commuteMethod */
                    commuteMethod?: (google.cloud.talent.v4beta1.CommuteMethod|null);

                    /** CommuteFilter startCoordinates */
                    startCoordinates?: (google.type.ILatLng|null);

                    /** CommuteFilter travelDuration */
                    travelDuration?: (google.protobuf.IDuration|null);

                    /** CommuteFilter allowImpreciseAddresses */
                    allowImpreciseAddresses?: (boolean|null);

                    /** CommuteFilter roadTraffic */
                    roadTraffic?: (google.cloud.talent.v4beta1.CommuteFilter.RoadTraffic|null);

                    /** CommuteFilter departureTime */
                    departureTime?: (google.type.ITimeOfDay|null);
                }

                /** Represents a CommuteFilter. */
                class CommuteFilter implements ICommuteFilter {

                    /**
                     * Constructs a new CommuteFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICommuteFilter);

                    /** CommuteFilter commuteMethod. */
                    public commuteMethod: google.cloud.talent.v4beta1.CommuteMethod;

                    /** CommuteFilter startCoordinates. */
                    public startCoordinates?: (google.type.ILatLng|null);

                    /** CommuteFilter travelDuration. */
                    public travelDuration?: (google.protobuf.IDuration|null);

                    /** CommuteFilter allowImpreciseAddresses. */
                    public allowImpreciseAddresses: boolean;

                    /** CommuteFilter roadTraffic. */
                    public roadTraffic: google.cloud.talent.v4beta1.CommuteFilter.RoadTraffic;

                    /** CommuteFilter departureTime. */
                    public departureTime?: (google.type.ITimeOfDay|null);

                    /** CommuteFilter trafficOption. */
                    public trafficOption?: ("roadTraffic"|"departureTime");

                    /**
                     * Creates a new CommuteFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommuteFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICommuteFilter): google.cloud.talent.v4beta1.CommuteFilter;

                    /**
                     * Encodes the specified CommuteFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.CommuteFilter.verify|verify} messages.
                     * @param message CommuteFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICommuteFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommuteFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CommuteFilter.verify|verify} messages.
                     * @param message CommuteFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICommuteFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommuteFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommuteFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CommuteFilter;

                    /**
                     * Decodes a CommuteFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommuteFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CommuteFilter;

                    /**
                     * Verifies a CommuteFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommuteFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommuteFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CommuteFilter;

                    /**
                     * Creates a plain object from a CommuteFilter message. Also converts values to other types if specified.
                     * @param message CommuteFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CommuteFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommuteFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CommuteFilter {

                    /** RoadTraffic enum. */
                    enum RoadTraffic {
                        ROAD_TRAFFIC_UNSPECIFIED = 0,
                        TRAFFIC_FREE = 1,
                        BUSY_HOUR = 2
                    }
                }

                /** Properties of a JobTitleFilter. */
                interface IJobTitleFilter {

                    /** JobTitleFilter jobTitle */
                    jobTitle?: (string|null);

                    /** JobTitleFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents a JobTitleFilter. */
                class JobTitleFilter implements IJobTitleFilter {

                    /**
                     * Constructs a new JobTitleFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IJobTitleFilter);

                    /** JobTitleFilter jobTitle. */
                    public jobTitle: string;

                    /** JobTitleFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new JobTitleFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobTitleFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IJobTitleFilter): google.cloud.talent.v4beta1.JobTitleFilter;

                    /**
                     * Encodes the specified JobTitleFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.JobTitleFilter.verify|verify} messages.
                     * @param message JobTitleFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IJobTitleFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobTitleFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.JobTitleFilter.verify|verify} messages.
                     * @param message JobTitleFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IJobTitleFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobTitleFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobTitleFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.JobTitleFilter;

                    /**
                     * Decodes a JobTitleFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobTitleFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.JobTitleFilter;

                    /**
                     * Verifies a JobTitleFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobTitleFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobTitleFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.JobTitleFilter;

                    /**
                     * Creates a plain object from a JobTitleFilter message. Also converts values to other types if specified.
                     * @param message JobTitleFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.JobTitleFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobTitleFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SkillFilter. */
                interface ISkillFilter {

                    /** SkillFilter skill */
                    skill?: (string|null);

                    /** SkillFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents a SkillFilter. */
                class SkillFilter implements ISkillFilter {

                    /**
                     * Constructs a new SkillFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISkillFilter);

                    /** SkillFilter skill. */
                    public skill: string;

                    /** SkillFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new SkillFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkillFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISkillFilter): google.cloud.talent.v4beta1.SkillFilter;

                    /**
                     * Encodes the specified SkillFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.SkillFilter.verify|verify} messages.
                     * @param message SkillFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISkillFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkillFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SkillFilter.verify|verify} messages.
                     * @param message SkillFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISkillFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkillFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkillFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SkillFilter;

                    /**
                     * Decodes a SkillFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkillFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SkillFilter;

                    /**
                     * Verifies a SkillFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkillFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkillFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SkillFilter;

                    /**
                     * Creates a plain object from a SkillFilter message. Also converts values to other types if specified.
                     * @param message SkillFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SkillFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkillFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EmployerFilter. */
                interface IEmployerFilter {

                    /** EmployerFilter employer */
                    employer?: (string|null);

                    /** EmployerFilter mode */
                    mode?: (google.cloud.talent.v4beta1.EmployerFilter.EmployerFilterMode|null);

                    /** EmployerFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents an EmployerFilter. */
                class EmployerFilter implements IEmployerFilter {

                    /**
                     * Constructs a new EmployerFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IEmployerFilter);

                    /** EmployerFilter employer. */
                    public employer: string;

                    /** EmployerFilter mode. */
                    public mode: google.cloud.talent.v4beta1.EmployerFilter.EmployerFilterMode;

                    /** EmployerFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new EmployerFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmployerFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IEmployerFilter): google.cloud.talent.v4beta1.EmployerFilter;

                    /**
                     * Encodes the specified EmployerFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.EmployerFilter.verify|verify} messages.
                     * @param message EmployerFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IEmployerFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmployerFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.EmployerFilter.verify|verify} messages.
                     * @param message EmployerFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IEmployerFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmployerFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmployerFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.EmployerFilter;

                    /**
                     * Decodes an EmployerFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmployerFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.EmployerFilter;

                    /**
                     * Verifies an EmployerFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmployerFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmployerFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.EmployerFilter;

                    /**
                     * Creates a plain object from an EmployerFilter message. Also converts values to other types if specified.
                     * @param message EmployerFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.EmployerFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmployerFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EmployerFilter {

                    /** EmployerFilterMode enum. */
                    enum EmployerFilterMode {
                        EMPLOYER_FILTER_MODE_UNSPECIFIED = 0,
                        ALL_EMPLOYMENT_RECORDS = 1,
                        CURRENT_EMPLOYMENT_RECORDS_ONLY = 2,
                        PAST_EMPLOYMENT_RECORDS_ONLY = 3
                    }
                }

                /** Properties of an EducationFilter. */
                interface IEducationFilter {

                    /** EducationFilter school */
                    school?: (string|null);

                    /** EducationFilter fieldOfStudy */
                    fieldOfStudy?: (string|null);

                    /** EducationFilter degreeType */
                    degreeType?: (google.cloud.talent.v4beta1.DegreeType|null);

                    /** EducationFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents an EducationFilter. */
                class EducationFilter implements IEducationFilter {

                    /**
                     * Constructs a new EducationFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IEducationFilter);

                    /** EducationFilter school. */
                    public school: string;

                    /** EducationFilter fieldOfStudy. */
                    public fieldOfStudy: string;

                    /** EducationFilter degreeType. */
                    public degreeType: google.cloud.talent.v4beta1.DegreeType;

                    /** EducationFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new EducationFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EducationFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IEducationFilter): google.cloud.talent.v4beta1.EducationFilter;

                    /**
                     * Encodes the specified EducationFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.EducationFilter.verify|verify} messages.
                     * @param message EducationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IEducationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EducationFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.EducationFilter.verify|verify} messages.
                     * @param message EducationFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IEducationFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EducationFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EducationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.EducationFilter;

                    /**
                     * Decodes an EducationFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EducationFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.EducationFilter;

                    /**
                     * Verifies an EducationFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EducationFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EducationFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.EducationFilter;

                    /**
                     * Creates a plain object from an EducationFilter message. Also converts values to other types if specified.
                     * @param message EducationFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.EducationFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EducationFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkExperienceFilter. */
                interface IWorkExperienceFilter {

                    /** WorkExperienceFilter minExperience */
                    minExperience?: (google.protobuf.IDuration|null);

                    /** WorkExperienceFilter maxExperience */
                    maxExperience?: (google.protobuf.IDuration|null);
                }

                /** Represents a WorkExperienceFilter. */
                class WorkExperienceFilter implements IWorkExperienceFilter {

                    /**
                     * Constructs a new WorkExperienceFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IWorkExperienceFilter);

                    /** WorkExperienceFilter minExperience. */
                    public minExperience?: (google.protobuf.IDuration|null);

                    /** WorkExperienceFilter maxExperience. */
                    public maxExperience?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new WorkExperienceFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkExperienceFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IWorkExperienceFilter): google.cloud.talent.v4beta1.WorkExperienceFilter;

                    /**
                     * Encodes the specified WorkExperienceFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.WorkExperienceFilter.verify|verify} messages.
                     * @param message WorkExperienceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IWorkExperienceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkExperienceFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.WorkExperienceFilter.verify|verify} messages.
                     * @param message WorkExperienceFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IWorkExperienceFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkExperienceFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkExperienceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.WorkExperienceFilter;

                    /**
                     * Decodes a WorkExperienceFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkExperienceFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.WorkExperienceFilter;

                    /**
                     * Verifies a WorkExperienceFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkExperienceFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkExperienceFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.WorkExperienceFilter;

                    /**
                     * Creates a plain object from a WorkExperienceFilter message. Also converts values to other types if specified.
                     * @param message WorkExperienceFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.WorkExperienceFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkExperienceFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApplicationDateFilter. */
                interface IApplicationDateFilter {

                    /** ApplicationDateFilter startDate */
                    startDate?: (google.type.IDate|null);

                    /** ApplicationDateFilter endDate */
                    endDate?: (google.type.IDate|null);
                }

                /** Represents an ApplicationDateFilter. */
                class ApplicationDateFilter implements IApplicationDateFilter {

                    /**
                     * Constructs a new ApplicationDateFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IApplicationDateFilter);

                    /** ApplicationDateFilter startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** ApplicationDateFilter endDate. */
                    public endDate?: (google.type.IDate|null);

                    /**
                     * Creates a new ApplicationDateFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplicationDateFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IApplicationDateFilter): google.cloud.talent.v4beta1.ApplicationDateFilter;

                    /**
                     * Encodes the specified ApplicationDateFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationDateFilter.verify|verify} messages.
                     * @param message ApplicationDateFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IApplicationDateFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplicationDateFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationDateFilter.verify|verify} messages.
                     * @param message ApplicationDateFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IApplicationDateFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplicationDateFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplicationDateFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ApplicationDateFilter;

                    /**
                     * Decodes an ApplicationDateFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplicationDateFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ApplicationDateFilter;

                    /**
                     * Verifies an ApplicationDateFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplicationDateFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplicationDateFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ApplicationDateFilter;

                    /**
                     * Creates a plain object from an ApplicationDateFilter message. Also converts values to other types if specified.
                     * @param message ApplicationDateFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ApplicationDateFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplicationDateFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApplicationOutcomeNotesFilter. */
                interface IApplicationOutcomeNotesFilter {

                    /** ApplicationOutcomeNotesFilter outcomeNotes */
                    outcomeNotes?: (string|null);

                    /** ApplicationOutcomeNotesFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents an ApplicationOutcomeNotesFilter. */
                class ApplicationOutcomeNotesFilter implements IApplicationOutcomeNotesFilter {

                    /**
                     * Constructs a new ApplicationOutcomeNotesFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter);

                    /** ApplicationOutcomeNotesFilter outcomeNotes. */
                    public outcomeNotes: string;

                    /** ApplicationOutcomeNotesFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new ApplicationOutcomeNotesFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplicationOutcomeNotesFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter): google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter;

                    /**
                     * Encodes the specified ApplicationOutcomeNotesFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter.verify|verify} messages.
                     * @param message ApplicationOutcomeNotesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplicationOutcomeNotesFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter.verify|verify} messages.
                     * @param message ApplicationOutcomeNotesFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IApplicationOutcomeNotesFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplicationOutcomeNotesFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplicationOutcomeNotesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter;

                    /**
                     * Decodes an ApplicationOutcomeNotesFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplicationOutcomeNotesFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter;

                    /**
                     * Verifies an ApplicationOutcomeNotesFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplicationOutcomeNotesFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplicationOutcomeNotesFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter;

                    /**
                     * Creates a plain object from an ApplicationOutcomeNotesFilter message. Also converts values to other types if specified.
                     * @param message ApplicationOutcomeNotesFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplicationOutcomeNotesFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApplicationJobFilter. */
                interface IApplicationJobFilter {

                    /** ApplicationJobFilter jobRequisitionId */
                    jobRequisitionId?: (string|null);

                    /** ApplicationJobFilter jobTitle */
                    jobTitle?: (string|null);

                    /** ApplicationJobFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents an ApplicationJobFilter. */
                class ApplicationJobFilter implements IApplicationJobFilter {

                    /**
                     * Constructs a new ApplicationJobFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IApplicationJobFilter);

                    /** ApplicationJobFilter jobRequisitionId. */
                    public jobRequisitionId: string;

                    /** ApplicationJobFilter jobTitle. */
                    public jobTitle: string;

                    /** ApplicationJobFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new ApplicationJobFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApplicationJobFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IApplicationJobFilter): google.cloud.talent.v4beta1.ApplicationJobFilter;

                    /**
                     * Encodes the specified ApplicationJobFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationJobFilter.verify|verify} messages.
                     * @param message ApplicationJobFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IApplicationJobFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApplicationJobFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ApplicationJobFilter.verify|verify} messages.
                     * @param message ApplicationJobFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IApplicationJobFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApplicationJobFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApplicationJobFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ApplicationJobFilter;

                    /**
                     * Decodes an ApplicationJobFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApplicationJobFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ApplicationJobFilter;

                    /**
                     * Verifies an ApplicationJobFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApplicationJobFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApplicationJobFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ApplicationJobFilter;

                    /**
                     * Creates a plain object from an ApplicationJobFilter message. Also converts values to other types if specified.
                     * @param message ApplicationJobFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ApplicationJobFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApplicationJobFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeFilter. */
                interface ITimeFilter {

                    /** TimeFilter startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeFilter endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** TimeFilter timeField */
                    timeField?: (google.cloud.talent.v4beta1.TimeFilter.TimeField|null);
                }

                /** Represents a TimeFilter. */
                class TimeFilter implements ITimeFilter {

                    /**
                     * Constructs a new TimeFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ITimeFilter);

                    /** TimeFilter startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeFilter endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** TimeFilter timeField. */
                    public timeField: google.cloud.talent.v4beta1.TimeFilter.TimeField;

                    /**
                     * Creates a new TimeFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ITimeFilter): google.cloud.talent.v4beta1.TimeFilter;

                    /**
                     * Encodes the specified TimeFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.TimeFilter.verify|verify} messages.
                     * @param message TimeFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ITimeFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.TimeFilter.verify|verify} messages.
                     * @param message TimeFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ITimeFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.TimeFilter;

                    /**
                     * Decodes a TimeFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.TimeFilter;

                    /**
                     * Verifies a TimeFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.TimeFilter;

                    /**
                     * Creates a plain object from a TimeFilter message. Also converts values to other types if specified.
                     * @param message TimeFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.TimeFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TimeFilter {

                    /** TimeField enum. */
                    enum TimeField {
                        TIME_FIELD_UNSPECIFIED = 0,
                        CREATE_TIME = 1,
                        UPDATE_TIME = 2
                    }
                }

                /** Properties of a CandidateAvailabilityFilter. */
                interface ICandidateAvailabilityFilter {

                    /** CandidateAvailabilityFilter negated */
                    negated?: (boolean|null);
                }

                /** Represents a CandidateAvailabilityFilter. */
                class CandidateAvailabilityFilter implements ICandidateAvailabilityFilter {

                    /**
                     * Constructs a new CandidateAvailabilityFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICandidateAvailabilityFilter);

                    /** CandidateAvailabilityFilter negated. */
                    public negated: boolean;

                    /**
                     * Creates a new CandidateAvailabilityFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CandidateAvailabilityFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICandidateAvailabilityFilter): google.cloud.talent.v4beta1.CandidateAvailabilityFilter;

                    /**
                     * Encodes the specified CandidateAvailabilityFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.CandidateAvailabilityFilter.verify|verify} messages.
                     * @param message CandidateAvailabilityFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICandidateAvailabilityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CandidateAvailabilityFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CandidateAvailabilityFilter.verify|verify} messages.
                     * @param message CandidateAvailabilityFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICandidateAvailabilityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CandidateAvailabilityFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CandidateAvailabilityFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CandidateAvailabilityFilter;

                    /**
                     * Decodes a CandidateAvailabilityFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CandidateAvailabilityFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CandidateAvailabilityFilter;

                    /**
                     * Verifies a CandidateAvailabilityFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CandidateAvailabilityFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CandidateAvailabilityFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CandidateAvailabilityFilter;

                    /**
                     * Creates a plain object from a CandidateAvailabilityFilter message. Also converts values to other types if specified.
                     * @param message CandidateAvailabilityFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CandidateAvailabilityFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CandidateAvailabilityFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AvailabilityFilter. */
                interface IAvailabilityFilter {

                    /** AvailabilityFilter signalType */
                    signalType?: (google.cloud.talent.v4beta1.AvailabilitySignalType|null);

                    /** AvailabilityFilter range */
                    range?: (google.cloud.talent.v4beta1.ITimestampRange|null);

                    /** AvailabilityFilter required */
                    required?: (boolean|null);
                }

                /** Represents an AvailabilityFilter. */
                class AvailabilityFilter implements IAvailabilityFilter {

                    /**
                     * Constructs a new AvailabilityFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IAvailabilityFilter);

                    /** AvailabilityFilter signalType. */
                    public signalType: google.cloud.talent.v4beta1.AvailabilitySignalType;

                    /** AvailabilityFilter range. */
                    public range?: (google.cloud.talent.v4beta1.ITimestampRange|null);

                    /** AvailabilityFilter required. */
                    public required: boolean;

                    /**
                     * Creates a new AvailabilityFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AvailabilityFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IAvailabilityFilter): google.cloud.talent.v4beta1.AvailabilityFilter;

                    /**
                     * Encodes the specified AvailabilityFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.AvailabilityFilter.verify|verify} messages.
                     * @param message AvailabilityFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IAvailabilityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AvailabilityFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.AvailabilityFilter.verify|verify} messages.
                     * @param message AvailabilityFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IAvailabilityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AvailabilityFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AvailabilityFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.AvailabilityFilter;

                    /**
                     * Decodes an AvailabilityFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AvailabilityFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.AvailabilityFilter;

                    /**
                     * Verifies an AvailabilityFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AvailabilityFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AvailabilityFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.AvailabilityFilter;

                    /**
                     * Creates a plain object from an AvailabilityFilter message. Also converts values to other types if specified.
                     * @param message AvailabilityFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.AvailabilityFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AvailabilityFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PersonNameFilter. */
                interface IPersonNameFilter {

                    /** PersonNameFilter personName */
                    personName?: (string|null);
                }

                /** Represents a PersonNameFilter. */
                class PersonNameFilter implements IPersonNameFilter {

                    /**
                     * Constructs a new PersonNameFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPersonNameFilter);

                    /** PersonNameFilter personName. */
                    public personName: string;

                    /**
                     * Creates a new PersonNameFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PersonNameFilter instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPersonNameFilter): google.cloud.talent.v4beta1.PersonNameFilter;

                    /**
                     * Encodes the specified PersonNameFilter message. Does not implicitly {@link google.cloud.talent.v4beta1.PersonNameFilter.verify|verify} messages.
                     * @param message PersonNameFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPersonNameFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PersonNameFilter message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.PersonNameFilter.verify|verify} messages.
                     * @param message PersonNameFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPersonNameFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonNameFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonNameFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.PersonNameFilter;

                    /**
                     * Decodes a PersonNameFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PersonNameFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.PersonNameFilter;

                    /**
                     * Verifies a PersonNameFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PersonNameFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PersonNameFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.PersonNameFilter;

                    /**
                     * Creates a plain object from a PersonNameFilter message. Also converts values to other types if specified.
                     * @param message PersonNameFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.PersonNameFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PersonNameFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HistogramQuery. */
                interface IHistogramQuery {

                    /** HistogramQuery histogramQuery */
                    histogramQuery?: (string|null);
                }

                /** Represents a HistogramQuery. */
                class HistogramQuery implements IHistogramQuery {

                    /**
                     * Constructs a new HistogramQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IHistogramQuery);

                    /** HistogramQuery histogramQuery. */
                    public histogramQuery: string;

                    /**
                     * Creates a new HistogramQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HistogramQuery instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IHistogramQuery): google.cloud.talent.v4beta1.HistogramQuery;

                    /**
                     * Encodes the specified HistogramQuery message. Does not implicitly {@link google.cloud.talent.v4beta1.HistogramQuery.verify|verify} messages.
                     * @param message HistogramQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IHistogramQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HistogramQuery message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.HistogramQuery.verify|verify} messages.
                     * @param message HistogramQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IHistogramQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HistogramQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HistogramQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.HistogramQuery;

                    /**
                     * Decodes a HistogramQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HistogramQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.HistogramQuery;

                    /**
                     * Verifies a HistogramQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HistogramQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HistogramQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.HistogramQuery;

                    /**
                     * Creates a plain object from a HistogramQuery message. Also converts values to other types if specified.
                     * @param message HistogramQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.HistogramQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HistogramQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HistogramQueryResult. */
                interface IHistogramQueryResult {

                    /** HistogramQueryResult histogramQuery */
                    histogramQuery?: (string|null);

                    /** HistogramQueryResult histogram */
                    histogram?: ({ [k: string]: (number|Long) }|null);
                }

                /** Represents a HistogramQueryResult. */
                class HistogramQueryResult implements IHistogramQueryResult {

                    /**
                     * Constructs a new HistogramQueryResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IHistogramQueryResult);

                    /** HistogramQueryResult histogramQuery. */
                    public histogramQuery: string;

                    /** HistogramQueryResult histogram. */
                    public histogram: { [k: string]: (number|Long) };

                    /**
                     * Creates a new HistogramQueryResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HistogramQueryResult instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IHistogramQueryResult): google.cloud.talent.v4beta1.HistogramQueryResult;

                    /**
                     * Encodes the specified HistogramQueryResult message. Does not implicitly {@link google.cloud.talent.v4beta1.HistogramQueryResult.verify|verify} messages.
                     * @param message HistogramQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IHistogramQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HistogramQueryResult message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.HistogramQueryResult.verify|verify} messages.
                     * @param message HistogramQueryResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IHistogramQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HistogramQueryResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HistogramQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.HistogramQueryResult;

                    /**
                     * Decodes a HistogramQueryResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HistogramQueryResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.HistogramQueryResult;

                    /**
                     * Verifies a HistogramQueryResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HistogramQueryResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HistogramQueryResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.HistogramQueryResult;

                    /**
                     * Creates a plain object from a HistogramQueryResult message. Also converts values to other types if specified.
                     * @param message HistogramQueryResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.HistogramQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HistogramQueryResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job company */
                    company?: (string|null);

                    /** Job requisitionId */
                    requisitionId?: (string|null);

                    /** Job title */
                    title?: (string|null);

                    /** Job description */
                    description?: (string|null);

                    /** Job addresses */
                    addresses?: (string[]|null);

                    /** Job applicationInfo */
                    applicationInfo?: (google.cloud.talent.v4beta1.Job.IApplicationInfo|null);

                    /** Job jobBenefits */
                    jobBenefits?: (google.cloud.talent.v4beta1.JobBenefit[]|null);

                    /** Job compensationInfo */
                    compensationInfo?: (google.cloud.talent.v4beta1.ICompensationInfo|null);

                    /** Job customAttributes */
                    customAttributes?: ({ [k: string]: google.cloud.talent.v4beta1.ICustomAttribute }|null);

                    /** Job degreeTypes */
                    degreeTypes?: (google.cloud.talent.v4beta1.DegreeType[]|null);

                    /** Job department */
                    department?: (string|null);

                    /** Job employmentTypes */
                    employmentTypes?: (google.cloud.talent.v4beta1.EmploymentType[]|null);

                    /** Job incentives */
                    incentives?: (string|null);

                    /** Job languageCode */
                    languageCode?: (string|null);

                    /** Job jobLevel */
                    jobLevel?: (google.cloud.talent.v4beta1.JobLevel|null);

                    /** Job promotionValue */
                    promotionValue?: (number|null);

                    /** Job qualifications */
                    qualifications?: (string|null);

                    /** Job responsibilities */
                    responsibilities?: (string|null);

                    /** Job postingRegion */
                    postingRegion?: (google.cloud.talent.v4beta1.PostingRegion|null);

                    /** Job visibility */
                    visibility?: (google.cloud.talent.v4beta1.Visibility|null);

                    /** Job jobStartTime */
                    jobStartTime?: (google.protobuf.ITimestamp|null);

                    /** Job jobEndTime */
                    jobEndTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingPublishTime */
                    postingPublishTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingExpireTime */
                    postingExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingCreateTime */
                    postingCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingUpdateTime */
                    postingUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job companyDisplayName */
                    companyDisplayName?: (string|null);

                    /** Job derivedInfo */
                    derivedInfo?: (google.cloud.talent.v4beta1.Job.IDerivedInfo|null);

                    /** Job processingOptions */
                    processingOptions?: (google.cloud.talent.v4beta1.Job.IProcessingOptions|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job company. */
                    public company: string;

                    /** Job requisitionId. */
                    public requisitionId: string;

                    /** Job title. */
                    public title: string;

                    /** Job description. */
                    public description: string;

                    /** Job addresses. */
                    public addresses: string[];

                    /** Job applicationInfo. */
                    public applicationInfo?: (google.cloud.talent.v4beta1.Job.IApplicationInfo|null);

                    /** Job jobBenefits. */
                    public jobBenefits: google.cloud.talent.v4beta1.JobBenefit[];

                    /** Job compensationInfo. */
                    public compensationInfo?: (google.cloud.talent.v4beta1.ICompensationInfo|null);

                    /** Job customAttributes. */
                    public customAttributes: { [k: string]: google.cloud.talent.v4beta1.ICustomAttribute };

                    /** Job degreeTypes. */
                    public degreeTypes: google.cloud.talent.v4beta1.DegreeType[];

                    /** Job department. */
                    public department: string;

                    /** Job employmentTypes. */
                    public employmentTypes: google.cloud.talent.v4beta1.EmploymentType[];

                    /** Job incentives. */
                    public incentives: string;

                    /** Job languageCode. */
                    public languageCode: string;

                    /** Job jobLevel. */
                    public jobLevel: google.cloud.talent.v4beta1.JobLevel;

                    /** Job promotionValue. */
                    public promotionValue: number;

                    /** Job qualifications. */
                    public qualifications: string;

                    /** Job responsibilities. */
                    public responsibilities: string;

                    /** Job postingRegion. */
                    public postingRegion: google.cloud.talent.v4beta1.PostingRegion;

                    /** Job visibility. */
                    public visibility: google.cloud.talent.v4beta1.Visibility;

                    /** Job jobStartTime. */
                    public jobStartTime?: (google.protobuf.ITimestamp|null);

                    /** Job jobEndTime. */
                    public jobEndTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingPublishTime. */
                    public postingPublishTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingExpireTime. */
                    public postingExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingCreateTime. */
                    public postingCreateTime?: (google.protobuf.ITimestamp|null);

                    /** Job postingUpdateTime. */
                    public postingUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job companyDisplayName. */
                    public companyDisplayName: string;

                    /** Job derivedInfo. */
                    public derivedInfo?: (google.cloud.talent.v4beta1.Job.IDerivedInfo|null);

                    /** Job processingOptions. */
                    public processingOptions?: (google.cloud.talent.v4beta1.Job.IProcessingOptions|null);

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IJob): google.cloud.talent.v4beta1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.talent.v4beta1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Job {

                    /** Properties of an ApplicationInfo. */
                    interface IApplicationInfo {

                        /** ApplicationInfo emails */
                        emails?: (string[]|null);

                        /** ApplicationInfo instruction */
                        instruction?: (string|null);

                        /** ApplicationInfo uris */
                        uris?: (string[]|null);
                    }

                    /** Represents an ApplicationInfo. */
                    class ApplicationInfo implements IApplicationInfo {

                        /**
                         * Constructs a new ApplicationInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.Job.IApplicationInfo);

                        /** ApplicationInfo emails. */
                        public emails: string[];

                        /** ApplicationInfo instruction. */
                        public instruction: string;

                        /** ApplicationInfo uris. */
                        public uris: string[];

                        /**
                         * Creates a new ApplicationInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ApplicationInfo instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.Job.IApplicationInfo): google.cloud.talent.v4beta1.Job.ApplicationInfo;

                        /**
                         * Encodes the specified ApplicationInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.Job.ApplicationInfo.verify|verify} messages.
                         * @param message ApplicationInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.Job.IApplicationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ApplicationInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Job.ApplicationInfo.verify|verify} messages.
                         * @param message ApplicationInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.Job.IApplicationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ApplicationInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ApplicationInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Job.ApplicationInfo;

                        /**
                         * Decodes an ApplicationInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ApplicationInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Job.ApplicationInfo;

                        /**
                         * Verifies an ApplicationInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ApplicationInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ApplicationInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Job.ApplicationInfo;

                        /**
                         * Creates a plain object from an ApplicationInfo message. Also converts values to other types if specified.
                         * @param message ApplicationInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.Job.ApplicationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ApplicationInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a DerivedInfo. */
                    interface IDerivedInfo {

                        /** DerivedInfo locations */
                        locations?: (google.cloud.talent.v4beta1.ILocation[]|null);

                        /** DerivedInfo jobCategories */
                        jobCategories?: (google.cloud.talent.v4beta1.JobCategory[]|null);
                    }

                    /** Represents a DerivedInfo. */
                    class DerivedInfo implements IDerivedInfo {

                        /**
                         * Constructs a new DerivedInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.Job.IDerivedInfo);

                        /** DerivedInfo locations. */
                        public locations: google.cloud.talent.v4beta1.ILocation[];

                        /** DerivedInfo jobCategories. */
                        public jobCategories: google.cloud.talent.v4beta1.JobCategory[];

                        /**
                         * Creates a new DerivedInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DerivedInfo instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.Job.IDerivedInfo): google.cloud.talent.v4beta1.Job.DerivedInfo;

                        /**
                         * Encodes the specified DerivedInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.Job.DerivedInfo.verify|verify} messages.
                         * @param message DerivedInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.Job.IDerivedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DerivedInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Job.DerivedInfo.verify|verify} messages.
                         * @param message DerivedInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.Job.IDerivedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DerivedInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DerivedInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Job.DerivedInfo;

                        /**
                         * Decodes a DerivedInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DerivedInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Job.DerivedInfo;

                        /**
                         * Verifies a DerivedInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DerivedInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DerivedInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Job.DerivedInfo;

                        /**
                         * Creates a plain object from a DerivedInfo message. Also converts values to other types if specified.
                         * @param message DerivedInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.Job.DerivedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DerivedInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ProcessingOptions. */
                    interface IProcessingOptions {

                        /** ProcessingOptions disableStreetAddressResolution */
                        disableStreetAddressResolution?: (boolean|null);

                        /** ProcessingOptions htmlSanitization */
                        htmlSanitization?: (google.cloud.talent.v4beta1.HtmlSanitization|null);
                    }

                    /** Represents a ProcessingOptions. */
                    class ProcessingOptions implements IProcessingOptions {

                        /**
                         * Constructs a new ProcessingOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.Job.IProcessingOptions);

                        /** ProcessingOptions disableStreetAddressResolution. */
                        public disableStreetAddressResolution: boolean;

                        /** ProcessingOptions htmlSanitization. */
                        public htmlSanitization: google.cloud.talent.v4beta1.HtmlSanitization;

                        /**
                         * Creates a new ProcessingOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProcessingOptions instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.Job.IProcessingOptions): google.cloud.talent.v4beta1.Job.ProcessingOptions;

                        /**
                         * Encodes the specified ProcessingOptions message. Does not implicitly {@link google.cloud.talent.v4beta1.Job.ProcessingOptions.verify|verify} messages.
                         * @param message ProcessingOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.Job.IProcessingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProcessingOptions message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Job.ProcessingOptions.verify|verify} messages.
                         * @param message ProcessingOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.Job.IProcessingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProcessingOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProcessingOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Job.ProcessingOptions;

                        /**
                         * Decodes a ProcessingOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProcessingOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Job.ProcessingOptions;

                        /**
                         * Verifies a ProcessingOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProcessingOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProcessingOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Job.ProcessingOptions;

                        /**
                         * Creates a plain object from a ProcessingOptions message. Also converts values to other types if specified.
                         * @param message ProcessingOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.Job.ProcessingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProcessingOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents a ProfileService */
                class ProfileService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ProfileService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ProfileService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProfileService;

                    /**
                     * Calls ListProfiles.
                     * @param request ListProfilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListProfilesResponse
                     */
                    public listProfiles(request: google.cloud.talent.v4beta1.IListProfilesRequest, callback: google.cloud.talent.v4beta1.ProfileService.ListProfilesCallback): void;

                    /**
                     * Calls ListProfiles.
                     * @param request ListProfilesRequest message or plain object
                     * @returns Promise
                     */
                    public listProfiles(request: google.cloud.talent.v4beta1.IListProfilesRequest): Promise<google.cloud.talent.v4beta1.ListProfilesResponse>;

                    /**
                     * Calls CreateProfile.
                     * @param request CreateProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Profile
                     */
                    public createProfile(request: google.cloud.talent.v4beta1.ICreateProfileRequest, callback: google.cloud.talent.v4beta1.ProfileService.CreateProfileCallback): void;

                    /**
                     * Calls CreateProfile.
                     * @param request CreateProfileRequest message or plain object
                     * @returns Promise
                     */
                    public createProfile(request: google.cloud.talent.v4beta1.ICreateProfileRequest): Promise<google.cloud.talent.v4beta1.Profile>;

                    /**
                     * Calls GetProfile.
                     * @param request GetProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Profile
                     */
                    public getProfile(request: google.cloud.talent.v4beta1.IGetProfileRequest, callback: google.cloud.talent.v4beta1.ProfileService.GetProfileCallback): void;

                    /**
                     * Calls GetProfile.
                     * @param request GetProfileRequest message or plain object
                     * @returns Promise
                     */
                    public getProfile(request: google.cloud.talent.v4beta1.IGetProfileRequest): Promise<google.cloud.talent.v4beta1.Profile>;

                    /**
                     * Calls UpdateProfile.
                     * @param request UpdateProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Profile
                     */
                    public updateProfile(request: google.cloud.talent.v4beta1.IUpdateProfileRequest, callback: google.cloud.talent.v4beta1.ProfileService.UpdateProfileCallback): void;

                    /**
                     * Calls UpdateProfile.
                     * @param request UpdateProfileRequest message or plain object
                     * @returns Promise
                     */
                    public updateProfile(request: google.cloud.talent.v4beta1.IUpdateProfileRequest): Promise<google.cloud.talent.v4beta1.Profile>;

                    /**
                     * Calls DeleteProfile.
                     * @param request DeleteProfileRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteProfile(request: google.cloud.talent.v4beta1.IDeleteProfileRequest, callback: google.cloud.talent.v4beta1.ProfileService.DeleteProfileCallback): void;

                    /**
                     * Calls DeleteProfile.
                     * @param request DeleteProfileRequest message or plain object
                     * @returns Promise
                     */
                    public deleteProfile(request: google.cloud.talent.v4beta1.IDeleteProfileRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls SearchProfiles.
                     * @param request SearchProfilesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchProfilesResponse
                     */
                    public searchProfiles(request: google.cloud.talent.v4beta1.ISearchProfilesRequest, callback: google.cloud.talent.v4beta1.ProfileService.SearchProfilesCallback): void;

                    /**
                     * Calls SearchProfiles.
                     * @param request SearchProfilesRequest message or plain object
                     * @returns Promise
                     */
                    public searchProfiles(request: google.cloud.talent.v4beta1.ISearchProfilesRequest): Promise<google.cloud.talent.v4beta1.SearchProfilesResponse>;
                }

                namespace ProfileService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#listProfiles}.
                     * @param error Error, if any
                     * @param [response] ListProfilesResponse
                     */
                    type ListProfilesCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ListProfilesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#createProfile}.
                     * @param error Error, if any
                     * @param [response] Profile
                     */
                    type CreateProfileCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Profile) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#getProfile}.
                     * @param error Error, if any
                     * @param [response] Profile
                     */
                    type GetProfileCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Profile) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#updateProfile}.
                     * @param error Error, if any
                     * @param [response] Profile
                     */
                    type UpdateProfileCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Profile) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#deleteProfile}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteProfileCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.ProfileService#searchProfiles}.
                     * @param error Error, if any
                     * @param [response] SearchProfilesResponse
                     */
                    type SearchProfilesCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.SearchProfilesResponse) => void;
                }

                /** Properties of a ListProfilesRequest. */
                interface IListProfilesRequest {

                    /** ListProfilesRequest parent */
                    parent?: (string|null);

                    /** ListProfilesRequest filter */
                    filter?: (string|null);

                    /** ListProfilesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListProfilesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListProfilesRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ListProfilesRequest. */
                class ListProfilesRequest implements IListProfilesRequest {

                    /**
                     * Constructs a new ListProfilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListProfilesRequest);

                    /** ListProfilesRequest parent. */
                    public parent: string;

                    /** ListProfilesRequest filter. */
                    public filter: string;

                    /** ListProfilesRequest pageToken. */
                    public pageToken: string;

                    /** ListProfilesRequest pageSize. */
                    public pageSize: number;

                    /** ListProfilesRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ListProfilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProfilesRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListProfilesRequest): google.cloud.talent.v4beta1.ListProfilesRequest;

                    /**
                     * Encodes the specified ListProfilesRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.ListProfilesRequest.verify|verify} messages.
                     * @param message ListProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProfilesRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListProfilesRequest.verify|verify} messages.
                     * @param message ListProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProfilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListProfilesRequest;

                    /**
                     * Decodes a ListProfilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListProfilesRequest;

                    /**
                     * Verifies a ListProfilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProfilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProfilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListProfilesRequest;

                    /**
                     * Creates a plain object from a ListProfilesRequest message. Also converts values to other types if specified.
                     * @param message ListProfilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListProfilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProfilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListProfilesResponse. */
                interface IListProfilesResponse {

                    /** ListProfilesResponse profiles */
                    profiles?: (google.cloud.talent.v4beta1.IProfile[]|null);

                    /** ListProfilesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListProfilesResponse. */
                class ListProfilesResponse implements IListProfilesResponse {

                    /**
                     * Constructs a new ListProfilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListProfilesResponse);

                    /** ListProfilesResponse profiles. */
                    public profiles: google.cloud.talent.v4beta1.IProfile[];

                    /** ListProfilesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListProfilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListProfilesResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListProfilesResponse): google.cloud.talent.v4beta1.ListProfilesResponse;

                    /**
                     * Encodes the specified ListProfilesResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.ListProfilesResponse.verify|verify} messages.
                     * @param message ListProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListProfilesResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListProfilesResponse.verify|verify} messages.
                     * @param message ListProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListProfilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListProfilesResponse;

                    /**
                     * Decodes a ListProfilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListProfilesResponse;

                    /**
                     * Verifies a ListProfilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListProfilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListProfilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListProfilesResponse;

                    /**
                     * Creates a plain object from a ListProfilesResponse message. Also converts values to other types if specified.
                     * @param message ListProfilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListProfilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListProfilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateProfileRequest. */
                interface ICreateProfileRequest {

                    /** CreateProfileRequest parent */
                    parent?: (string|null);

                    /** CreateProfileRequest profile */
                    profile?: (google.cloud.talent.v4beta1.IProfile|null);
                }

                /** Represents a CreateProfileRequest. */
                class CreateProfileRequest implements ICreateProfileRequest {

                    /**
                     * Constructs a new CreateProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateProfileRequest);

                    /** CreateProfileRequest parent. */
                    public parent: string;

                    /** CreateProfileRequest profile. */
                    public profile?: (google.cloud.talent.v4beta1.IProfile|null);

                    /**
                     * Creates a new CreateProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateProfileRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateProfileRequest): google.cloud.talent.v4beta1.CreateProfileRequest;

                    /**
                     * Encodes the specified CreateProfileRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateProfileRequest.verify|verify} messages.
                     * @param message CreateProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateProfileRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateProfileRequest.verify|verify} messages.
                     * @param message CreateProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateProfileRequest;

                    /**
                     * Decodes a CreateProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateProfileRequest;

                    /**
                     * Verifies a CreateProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateProfileRequest;

                    /**
                     * Creates a plain object from a CreateProfileRequest message. Also converts values to other types if specified.
                     * @param message CreateProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetProfileRequest. */
                interface IGetProfileRequest {

                    /** GetProfileRequest name */
                    name?: (string|null);
                }

                /** Represents a GetProfileRequest. */
                class GetProfileRequest implements IGetProfileRequest {

                    /**
                     * Constructs a new GetProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IGetProfileRequest);

                    /** GetProfileRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetProfileRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IGetProfileRequest): google.cloud.talent.v4beta1.GetProfileRequest;

                    /**
                     * Encodes the specified GetProfileRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.GetProfileRequest.verify|verify} messages.
                     * @param message GetProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IGetProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetProfileRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.GetProfileRequest.verify|verify} messages.
                     * @param message GetProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IGetProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.GetProfileRequest;

                    /**
                     * Decodes a GetProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.GetProfileRequest;

                    /**
                     * Verifies a GetProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.GetProfileRequest;

                    /**
                     * Creates a plain object from a GetProfileRequest message. Also converts values to other types if specified.
                     * @param message GetProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.GetProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateProfileRequest. */
                interface IUpdateProfileRequest {

                    /** UpdateProfileRequest profile */
                    profile?: (google.cloud.talent.v4beta1.IProfile|null);

                    /** UpdateProfileRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateProfileRequest. */
                class UpdateProfileRequest implements IUpdateProfileRequest {

                    /**
                     * Constructs a new UpdateProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IUpdateProfileRequest);

                    /** UpdateProfileRequest profile. */
                    public profile?: (google.cloud.talent.v4beta1.IProfile|null);

                    /** UpdateProfileRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateProfileRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IUpdateProfileRequest): google.cloud.talent.v4beta1.UpdateProfileRequest;

                    /**
                     * Encodes the specified UpdateProfileRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateProfileRequest.verify|verify} messages.
                     * @param message UpdateProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IUpdateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateProfileRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateProfileRequest.verify|verify} messages.
                     * @param message UpdateProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IUpdateProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.UpdateProfileRequest;

                    /**
                     * Decodes an UpdateProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.UpdateProfileRequest;

                    /**
                     * Verifies an UpdateProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.UpdateProfileRequest;

                    /**
                     * Creates a plain object from an UpdateProfileRequest message. Also converts values to other types if specified.
                     * @param message UpdateProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.UpdateProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteProfileRequest. */
                interface IDeleteProfileRequest {

                    /** DeleteProfileRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteProfileRequest. */
                class DeleteProfileRequest implements IDeleteProfileRequest {

                    /**
                     * Constructs a new DeleteProfileRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeleteProfileRequest);

                    /** DeleteProfileRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteProfileRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteProfileRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeleteProfileRequest): google.cloud.talent.v4beta1.DeleteProfileRequest;

                    /**
                     * Encodes the specified DeleteProfileRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteProfileRequest.verify|verify} messages.
                     * @param message DeleteProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeleteProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteProfileRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteProfileRequest.verify|verify} messages.
                     * @param message DeleteProfileRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeleteProfileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteProfileRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeleteProfileRequest;

                    /**
                     * Decodes a DeleteProfileRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteProfileRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeleteProfileRequest;

                    /**
                     * Verifies a DeleteProfileRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteProfileRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteProfileRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeleteProfileRequest;

                    /**
                     * Creates a plain object from a DeleteProfileRequest message. Also converts values to other types if specified.
                     * @param message DeleteProfileRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeleteProfileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteProfileRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchProfilesRequest. */
                interface ISearchProfilesRequest {

                    /** SearchProfilesRequest parent */
                    parent?: (string|null);

                    /** SearchProfilesRequest requestMetadata */
                    requestMetadata?: (google.cloud.talent.v4beta1.IRequestMetadata|null);

                    /** SearchProfilesRequest profileQuery */
                    profileQuery?: (google.cloud.talent.v4beta1.IProfileQuery|null);

                    /** SearchProfilesRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchProfilesRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchProfilesRequest offset */
                    offset?: (number|null);

                    /** SearchProfilesRequest disableSpellCheck */
                    disableSpellCheck?: (boolean|null);

                    /** SearchProfilesRequest orderBy */
                    orderBy?: (string|null);

                    /** SearchProfilesRequest caseSensitiveSort */
                    caseSensitiveSort?: (boolean|null);

                    /** SearchProfilesRequest histogramQueries */
                    histogramQueries?: (google.cloud.talent.v4beta1.IHistogramQuery[]|null);

                    /** SearchProfilesRequest resultSetId */
                    resultSetId?: (string|null);

                    /** SearchProfilesRequest strictKeywordsSearch */
                    strictKeywordsSearch?: (boolean|null);
                }

                /** Represents a SearchProfilesRequest. */
                class SearchProfilesRequest implements ISearchProfilesRequest {

                    /**
                     * Constructs a new SearchProfilesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISearchProfilesRequest);

                    /** SearchProfilesRequest parent. */
                    public parent: string;

                    /** SearchProfilesRequest requestMetadata. */
                    public requestMetadata?: (google.cloud.talent.v4beta1.IRequestMetadata|null);

                    /** SearchProfilesRequest profileQuery. */
                    public profileQuery?: (google.cloud.talent.v4beta1.IProfileQuery|null);

                    /** SearchProfilesRequest pageSize. */
                    public pageSize: number;

                    /** SearchProfilesRequest pageToken. */
                    public pageToken: string;

                    /** SearchProfilesRequest offset. */
                    public offset: number;

                    /** SearchProfilesRequest disableSpellCheck. */
                    public disableSpellCheck: boolean;

                    /** SearchProfilesRequest orderBy. */
                    public orderBy: string;

                    /** SearchProfilesRequest caseSensitiveSort. */
                    public caseSensitiveSort: boolean;

                    /** SearchProfilesRequest histogramQueries. */
                    public histogramQueries: google.cloud.talent.v4beta1.IHistogramQuery[];

                    /** SearchProfilesRequest resultSetId. */
                    public resultSetId: string;

                    /** SearchProfilesRequest strictKeywordsSearch. */
                    public strictKeywordsSearch: boolean;

                    /**
                     * Creates a new SearchProfilesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchProfilesRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISearchProfilesRequest): google.cloud.talent.v4beta1.SearchProfilesRequest;

                    /**
                     * Encodes the specified SearchProfilesRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchProfilesRequest.verify|verify} messages.
                     * @param message SearchProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISearchProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchProfilesRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchProfilesRequest.verify|verify} messages.
                     * @param message SearchProfilesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISearchProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchProfilesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchProfilesRequest;

                    /**
                     * Decodes a SearchProfilesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchProfilesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchProfilesRequest;

                    /**
                     * Verifies a SearchProfilesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchProfilesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchProfilesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchProfilesRequest;

                    /**
                     * Creates a plain object from a SearchProfilesRequest message. Also converts values to other types if specified.
                     * @param message SearchProfilesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SearchProfilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchProfilesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchProfilesResponse. */
                interface ISearchProfilesResponse {

                    /** SearchProfilesResponse estimatedTotalSize */
                    estimatedTotalSize?: (number|Long|null);

                    /** SearchProfilesResponse spellCorrection */
                    spellCorrection?: (google.cloud.talent.v4beta1.ISpellingCorrection|null);

                    /** SearchProfilesResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /** SearchProfilesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** SearchProfilesResponse histogramQueryResults */
                    histogramQueryResults?: (google.cloud.talent.v4beta1.IHistogramQueryResult[]|null);

                    /** SearchProfilesResponse summarizedProfiles */
                    summarizedProfiles?: (google.cloud.talent.v4beta1.ISummarizedProfile[]|null);

                    /** SearchProfilesResponse resultSetId */
                    resultSetId?: (string|null);
                }

                /** Represents a SearchProfilesResponse. */
                class SearchProfilesResponse implements ISearchProfilesResponse {

                    /**
                     * Constructs a new SearchProfilesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISearchProfilesResponse);

                    /** SearchProfilesResponse estimatedTotalSize. */
                    public estimatedTotalSize: (number|Long);

                    /** SearchProfilesResponse spellCorrection. */
                    public spellCorrection?: (google.cloud.talent.v4beta1.ISpellingCorrection|null);

                    /** SearchProfilesResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /** SearchProfilesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** SearchProfilesResponse histogramQueryResults. */
                    public histogramQueryResults: google.cloud.talent.v4beta1.IHistogramQueryResult[];

                    /** SearchProfilesResponse summarizedProfiles. */
                    public summarizedProfiles: google.cloud.talent.v4beta1.ISummarizedProfile[];

                    /** SearchProfilesResponse resultSetId. */
                    public resultSetId: string;

                    /**
                     * Creates a new SearchProfilesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchProfilesResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISearchProfilesResponse): google.cloud.talent.v4beta1.SearchProfilesResponse;

                    /**
                     * Encodes the specified SearchProfilesResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.SearchProfilesResponse.verify|verify} messages.
                     * @param message SearchProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISearchProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchProfilesResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SearchProfilesResponse.verify|verify} messages.
                     * @param message SearchProfilesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISearchProfilesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchProfilesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SearchProfilesResponse;

                    /**
                     * Decodes a SearchProfilesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchProfilesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SearchProfilesResponse;

                    /**
                     * Verifies a SearchProfilesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchProfilesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchProfilesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SearchProfilesResponse;

                    /**
                     * Creates a plain object from a SearchProfilesResponse message. Also converts values to other types if specified.
                     * @param message SearchProfilesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SearchProfilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchProfilesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SummarizedProfile. */
                interface ISummarizedProfile {

                    /** SummarizedProfile profiles */
                    profiles?: (google.cloud.talent.v4beta1.IProfile[]|null);

                    /** SummarizedProfile summary */
                    summary?: (google.cloud.talent.v4beta1.IProfile|null);
                }

                /** Represents a SummarizedProfile. */
                class SummarizedProfile implements ISummarizedProfile {

                    /**
                     * Constructs a new SummarizedProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ISummarizedProfile);

                    /** SummarizedProfile profiles. */
                    public profiles: google.cloud.talent.v4beta1.IProfile[];

                    /** SummarizedProfile summary. */
                    public summary?: (google.cloud.talent.v4beta1.IProfile|null);

                    /**
                     * Creates a new SummarizedProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SummarizedProfile instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ISummarizedProfile): google.cloud.talent.v4beta1.SummarizedProfile;

                    /**
                     * Encodes the specified SummarizedProfile message. Does not implicitly {@link google.cloud.talent.v4beta1.SummarizedProfile.verify|verify} messages.
                     * @param message SummarizedProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ISummarizedProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SummarizedProfile message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.SummarizedProfile.verify|verify} messages.
                     * @param message SummarizedProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ISummarizedProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SummarizedProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SummarizedProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.SummarizedProfile;

                    /**
                     * Decodes a SummarizedProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SummarizedProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.SummarizedProfile;

                    /**
                     * Verifies a SummarizedProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SummarizedProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SummarizedProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.SummarizedProfile;

                    /**
                     * Creates a plain object from a SummarizedProfile message. Also converts values to other types if specified.
                     * @param message SummarizedProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.SummarizedProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SummarizedProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Profile. */
                interface IProfile {

                    /** Profile name */
                    name?: (string|null);

                    /** Profile externalId */
                    externalId?: (string|null);

                    /** Profile source */
                    source?: (string|null);

                    /** Profile uri */
                    uri?: (string|null);

                    /** Profile groupId */
                    groupId?: (string|null);

                    /** Profile isHirable */
                    isHirable?: (google.protobuf.IBoolValue|null);

                    /** Profile createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Profile updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile candidateUpdateTime */
                    candidateUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile resumeUpdateTime */
                    resumeUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile resume */
                    resume?: (google.cloud.talent.v4beta1.IResume|null);

                    /** Profile personNames */
                    personNames?: (google.cloud.talent.v4beta1.IPersonName[]|null);

                    /** Profile addresses */
                    addresses?: (google.cloud.talent.v4beta1.IAddress[]|null);

                    /** Profile emailAddresses */
                    emailAddresses?: (google.cloud.talent.v4beta1.IEmail[]|null);

                    /** Profile phoneNumbers */
                    phoneNumbers?: (google.cloud.talent.v4beta1.IPhone[]|null);

                    /** Profile personalUris */
                    personalUris?: (google.cloud.talent.v4beta1.IPersonalUri[]|null);

                    /** Profile additionalContactInfo */
                    additionalContactInfo?: (google.cloud.talent.v4beta1.IAdditionalContactInfo[]|null);

                    /** Profile employmentRecords */
                    employmentRecords?: (google.cloud.talent.v4beta1.IEmploymentRecord[]|null);

                    /** Profile educationRecords */
                    educationRecords?: (google.cloud.talent.v4beta1.IEducationRecord[]|null);

                    /** Profile skills */
                    skills?: (google.cloud.talent.v4beta1.ISkill[]|null);

                    /** Profile activities */
                    activities?: (google.cloud.talent.v4beta1.IActivity[]|null);

                    /** Profile publications */
                    publications?: (google.cloud.talent.v4beta1.IPublication[]|null);

                    /** Profile patents */
                    patents?: (google.cloud.talent.v4beta1.IPatent[]|null);

                    /** Profile certifications */
                    certifications?: (google.cloud.talent.v4beta1.ICertification[]|null);

                    /** Profile applications */
                    applications?: (string[]|null);

                    /** Profile assignments */
                    assignments?: (string[]|null);

                    /** Profile customAttributes */
                    customAttributes?: ({ [k: string]: google.cloud.talent.v4beta1.ICustomAttribute }|null);

                    /** Profile processed */
                    processed?: (boolean|null);

                    /** Profile keywordSnippet */
                    keywordSnippet?: (string|null);

                    /** Profile availabilitySignals */
                    availabilitySignals?: (google.cloud.talent.v4beta1.IAvailabilitySignal[]|null);

                    /** Profile derivedAddresses */
                    derivedAddresses?: (google.cloud.talent.v4beta1.ILocation[]|null);
                }

                /** Represents a Profile. */
                class Profile implements IProfile {

                    /**
                     * Constructs a new Profile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IProfile);

                    /** Profile name. */
                    public name: string;

                    /** Profile externalId. */
                    public externalId: string;

                    /** Profile source. */
                    public source: string;

                    /** Profile uri. */
                    public uri: string;

                    /** Profile groupId. */
                    public groupId: string;

                    /** Profile isHirable. */
                    public isHirable?: (google.protobuf.IBoolValue|null);

                    /** Profile createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Profile updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile candidateUpdateTime. */
                    public candidateUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile resumeUpdateTime. */
                    public resumeUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Profile resume. */
                    public resume?: (google.cloud.talent.v4beta1.IResume|null);

                    /** Profile personNames. */
                    public personNames: google.cloud.talent.v4beta1.IPersonName[];

                    /** Profile addresses. */
                    public addresses: google.cloud.talent.v4beta1.IAddress[];

                    /** Profile emailAddresses. */
                    public emailAddresses: google.cloud.talent.v4beta1.IEmail[];

                    /** Profile phoneNumbers. */
                    public phoneNumbers: google.cloud.talent.v4beta1.IPhone[];

                    /** Profile personalUris. */
                    public personalUris: google.cloud.talent.v4beta1.IPersonalUri[];

                    /** Profile additionalContactInfo. */
                    public additionalContactInfo: google.cloud.talent.v4beta1.IAdditionalContactInfo[];

                    /** Profile employmentRecords. */
                    public employmentRecords: google.cloud.talent.v4beta1.IEmploymentRecord[];

                    /** Profile educationRecords. */
                    public educationRecords: google.cloud.talent.v4beta1.IEducationRecord[];

                    /** Profile skills. */
                    public skills: google.cloud.talent.v4beta1.ISkill[];

                    /** Profile activities. */
                    public activities: google.cloud.talent.v4beta1.IActivity[];

                    /** Profile publications. */
                    public publications: google.cloud.talent.v4beta1.IPublication[];

                    /** Profile patents. */
                    public patents: google.cloud.talent.v4beta1.IPatent[];

                    /** Profile certifications. */
                    public certifications: google.cloud.talent.v4beta1.ICertification[];

                    /** Profile applications. */
                    public applications: string[];

                    /** Profile assignments. */
                    public assignments: string[];

                    /** Profile customAttributes. */
                    public customAttributes: { [k: string]: google.cloud.talent.v4beta1.ICustomAttribute };

                    /** Profile processed. */
                    public processed: boolean;

                    /** Profile keywordSnippet. */
                    public keywordSnippet: string;

                    /** Profile availabilitySignals. */
                    public availabilitySignals: google.cloud.talent.v4beta1.IAvailabilitySignal[];

                    /** Profile derivedAddresses. */
                    public derivedAddresses: google.cloud.talent.v4beta1.ILocation[];

                    /**
                     * Creates a new Profile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Profile instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IProfile): google.cloud.talent.v4beta1.Profile;

                    /**
                     * Encodes the specified Profile message. Does not implicitly {@link google.cloud.talent.v4beta1.Profile.verify|verify} messages.
                     * @param message Profile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Profile message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Profile.verify|verify} messages.
                     * @param message Profile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Profile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Profile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Profile;

                    /**
                     * Decodes a Profile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Profile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Profile;

                    /**
                     * Verifies a Profile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Profile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Profile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Profile;

                    /**
                     * Creates a plain object from a Profile message. Also converts values to other types if specified.
                     * @param message Profile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Profile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AvailabilitySignal. */
                interface IAvailabilitySignal {

                    /** AvailabilitySignal type */
                    type?: (google.cloud.talent.v4beta1.AvailabilitySignalType|null);

                    /** AvailabilitySignal lastUpdateTime */
                    lastUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** AvailabilitySignal filterSatisfied */
                    filterSatisfied?: (google.protobuf.IBoolValue|null);
                }

                /** Represents an AvailabilitySignal. */
                class AvailabilitySignal implements IAvailabilitySignal {

                    /**
                     * Constructs a new AvailabilitySignal.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IAvailabilitySignal);

                    /** AvailabilitySignal type. */
                    public type: google.cloud.talent.v4beta1.AvailabilitySignalType;

                    /** AvailabilitySignal lastUpdateTime. */
                    public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** AvailabilitySignal filterSatisfied. */
                    public filterSatisfied?: (google.protobuf.IBoolValue|null);

                    /**
                     * Creates a new AvailabilitySignal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AvailabilitySignal instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IAvailabilitySignal): google.cloud.talent.v4beta1.AvailabilitySignal;

                    /**
                     * Encodes the specified AvailabilitySignal message. Does not implicitly {@link google.cloud.talent.v4beta1.AvailabilitySignal.verify|verify} messages.
                     * @param message AvailabilitySignal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IAvailabilitySignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AvailabilitySignal message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.AvailabilitySignal.verify|verify} messages.
                     * @param message AvailabilitySignal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IAvailabilitySignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AvailabilitySignal message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AvailabilitySignal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.AvailabilitySignal;

                    /**
                     * Decodes an AvailabilitySignal message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AvailabilitySignal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.AvailabilitySignal;

                    /**
                     * Verifies an AvailabilitySignal message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AvailabilitySignal message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AvailabilitySignal
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.AvailabilitySignal;

                    /**
                     * Creates a plain object from an AvailabilitySignal message. Also converts values to other types if specified.
                     * @param message AvailabilitySignal
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.AvailabilitySignal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AvailabilitySignal to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Resume. */
                interface IResume {

                    /** Resume structuredResume */
                    structuredResume?: (string|null);

                    /** Resume resumeType */
                    resumeType?: (google.cloud.talent.v4beta1.Resume.ResumeType|null);
                }

                /** Represents a Resume. */
                class Resume implements IResume {

                    /**
                     * Constructs a new Resume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IResume);

                    /** Resume structuredResume. */
                    public structuredResume: string;

                    /** Resume resumeType. */
                    public resumeType: google.cloud.talent.v4beta1.Resume.ResumeType;

                    /**
                     * Creates a new Resume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resume instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IResume): google.cloud.talent.v4beta1.Resume;

                    /**
                     * Encodes the specified Resume message. Does not implicitly {@link google.cloud.talent.v4beta1.Resume.verify|verify} messages.
                     * @param message Resume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IResume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resume message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Resume.verify|verify} messages.
                     * @param message Resume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IResume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Resume;

                    /**
                     * Decodes a Resume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Resume;

                    /**
                     * Verifies a Resume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Resume;

                    /**
                     * Creates a plain object from a Resume message. Also converts values to other types if specified.
                     * @param message Resume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Resume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Resume {

                    /** ResumeType enum. */
                    enum ResumeType {
                        RESUME_TYPE_UNSPECIFIED = 0,
                        HRXML = 1,
                        OTHER_RESUME_TYPE = 2
                    }
                }

                /** Properties of a PersonName. */
                interface IPersonName {

                    /** PersonName formattedName */
                    formattedName?: (string|null);

                    /** PersonName structuredName */
                    structuredName?: (google.cloud.talent.v4beta1.PersonName.IPersonStructuredName|null);

                    /** PersonName preferredName */
                    preferredName?: (string|null);
                }

                /** Represents a PersonName. */
                class PersonName implements IPersonName {

                    /**
                     * Constructs a new PersonName.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPersonName);

                    /** PersonName formattedName. */
                    public formattedName: string;

                    /** PersonName structuredName. */
                    public structuredName?: (google.cloud.talent.v4beta1.PersonName.IPersonStructuredName|null);

                    /** PersonName preferredName. */
                    public preferredName: string;

                    /** PersonName personName. */
                    public personName?: ("formattedName"|"structuredName");

                    /**
                     * Creates a new PersonName instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PersonName instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPersonName): google.cloud.talent.v4beta1.PersonName;

                    /**
                     * Encodes the specified PersonName message. Does not implicitly {@link google.cloud.talent.v4beta1.PersonName.verify|verify} messages.
                     * @param message PersonName message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPersonName, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PersonName message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.PersonName.verify|verify} messages.
                     * @param message PersonName message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPersonName, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonName message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonName
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.PersonName;

                    /**
                     * Decodes a PersonName message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PersonName
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.PersonName;

                    /**
                     * Verifies a PersonName message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PersonName message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PersonName
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.PersonName;

                    /**
                     * Creates a plain object from a PersonName message. Also converts values to other types if specified.
                     * @param message PersonName
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.PersonName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PersonName to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PersonName {

                    /** Properties of a PersonStructuredName. */
                    interface IPersonStructuredName {

                        /** PersonStructuredName givenName */
                        givenName?: (string|null);

                        /** PersonStructuredName preferredName */
                        preferredName?: (string|null);

                        /** PersonStructuredName middleInitial */
                        middleInitial?: (string|null);

                        /** PersonStructuredName familyName */
                        familyName?: (string|null);

                        /** PersonStructuredName suffixes */
                        suffixes?: (string[]|null);

                        /** PersonStructuredName prefixes */
                        prefixes?: (string[]|null);
                    }

                    /** Represents a PersonStructuredName. */
                    class PersonStructuredName implements IPersonStructuredName {

                        /**
                         * Constructs a new PersonStructuredName.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.talent.v4beta1.PersonName.IPersonStructuredName);

                        /** PersonStructuredName givenName. */
                        public givenName: string;

                        /** PersonStructuredName preferredName. */
                        public preferredName: string;

                        /** PersonStructuredName middleInitial. */
                        public middleInitial: string;

                        /** PersonStructuredName familyName. */
                        public familyName: string;

                        /** PersonStructuredName suffixes. */
                        public suffixes: string[];

                        /** PersonStructuredName prefixes. */
                        public prefixes: string[];

                        /**
                         * Creates a new PersonStructuredName instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PersonStructuredName instance
                         */
                        public static create(properties?: google.cloud.talent.v4beta1.PersonName.IPersonStructuredName): google.cloud.talent.v4beta1.PersonName.PersonStructuredName;

                        /**
                         * Encodes the specified PersonStructuredName message. Does not implicitly {@link google.cloud.talent.v4beta1.PersonName.PersonStructuredName.verify|verify} messages.
                         * @param message PersonStructuredName message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.talent.v4beta1.PersonName.IPersonStructuredName, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PersonStructuredName message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.PersonName.PersonStructuredName.verify|verify} messages.
                         * @param message PersonStructuredName message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.talent.v4beta1.PersonName.IPersonStructuredName, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PersonStructuredName message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PersonStructuredName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.PersonName.PersonStructuredName;

                        /**
                         * Decodes a PersonStructuredName message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PersonStructuredName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.PersonName.PersonStructuredName;

                        /**
                         * Verifies a PersonStructuredName message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PersonStructuredName message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PersonStructuredName
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.PersonName.PersonStructuredName;

                        /**
                         * Creates a plain object from a PersonStructuredName message. Also converts values to other types if specified.
                         * @param message PersonStructuredName
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.talent.v4beta1.PersonName.PersonStructuredName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PersonStructuredName to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an Address. */
                interface IAddress {

                    /** Address usage */
                    usage?: (google.cloud.talent.v4beta1.ContactInfoUsage|null);

                    /** Address unstructuredAddress */
                    unstructuredAddress?: (string|null);

                    /** Address structuredAddress */
                    structuredAddress?: (google.type.IPostalAddress|null);

                    /** Address current */
                    current?: (google.protobuf.IBoolValue|null);
                }

                /** Represents an Address. */
                class Address implements IAddress {

                    /**
                     * Constructs a new Address.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IAddress);

                    /** Address usage. */
                    public usage: google.cloud.talent.v4beta1.ContactInfoUsage;

                    /** Address unstructuredAddress. */
                    public unstructuredAddress: string;

                    /** Address structuredAddress. */
                    public structuredAddress?: (google.type.IPostalAddress|null);

                    /** Address current. */
                    public current?: (google.protobuf.IBoolValue|null);

                    /** Address address. */
                    public address?: ("unstructuredAddress"|"structuredAddress");

                    /**
                     * Creates a new Address instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Address instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IAddress): google.cloud.talent.v4beta1.Address;

                    /**
                     * Encodes the specified Address message. Does not implicitly {@link google.cloud.talent.v4beta1.Address.verify|verify} messages.
                     * @param message Address message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Address message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Address.verify|verify} messages.
                     * @param message Address message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Address message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Address
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Address;

                    /**
                     * Decodes an Address message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Address
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Address;

                    /**
                     * Verifies an Address message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Address message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Address
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Address;

                    /**
                     * Creates a plain object from an Address message. Also converts values to other types if specified.
                     * @param message Address
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Address to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Email. */
                interface IEmail {

                    /** Email usage */
                    usage?: (google.cloud.talent.v4beta1.ContactInfoUsage|null);

                    /** Email emailAddress */
                    emailAddress?: (string|null);
                }

                /** Represents an Email. */
                class Email implements IEmail {

                    /**
                     * Constructs a new Email.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IEmail);

                    /** Email usage. */
                    public usage: google.cloud.talent.v4beta1.ContactInfoUsage;

                    /** Email emailAddress. */
                    public emailAddress: string;

                    /**
                     * Creates a new Email instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Email instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IEmail): google.cloud.talent.v4beta1.Email;

                    /**
                     * Encodes the specified Email message. Does not implicitly {@link google.cloud.talent.v4beta1.Email.verify|verify} messages.
                     * @param message Email message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Email message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Email.verify|verify} messages.
                     * @param message Email message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Email message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Email
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Email;

                    /**
                     * Decodes an Email message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Email
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Email;

                    /**
                     * Verifies an Email message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Email message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Email
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Email;

                    /**
                     * Creates a plain object from an Email message. Also converts values to other types if specified.
                     * @param message Email
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Email, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Email to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Phone. */
                interface IPhone {

                    /** Phone usage */
                    usage?: (google.cloud.talent.v4beta1.ContactInfoUsage|null);

                    /** Phone type */
                    type?: (google.cloud.talent.v4beta1.Phone.PhoneType|null);

                    /** Phone number */
                    number?: (string|null);

                    /** Phone whenAvailable */
                    whenAvailable?: (string|null);
                }

                /** Represents a Phone. */
                class Phone implements IPhone {

                    /**
                     * Constructs a new Phone.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPhone);

                    /** Phone usage. */
                    public usage: google.cloud.talent.v4beta1.ContactInfoUsage;

                    /** Phone type. */
                    public type: google.cloud.talent.v4beta1.Phone.PhoneType;

                    /** Phone number. */
                    public number: string;

                    /** Phone whenAvailable. */
                    public whenAvailable: string;

                    /**
                     * Creates a new Phone instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Phone instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPhone): google.cloud.talent.v4beta1.Phone;

                    /**
                     * Encodes the specified Phone message. Does not implicitly {@link google.cloud.talent.v4beta1.Phone.verify|verify} messages.
                     * @param message Phone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPhone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Phone message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Phone.verify|verify} messages.
                     * @param message Phone message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPhone, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Phone message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Phone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Phone;

                    /**
                     * Decodes a Phone message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Phone
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Phone;

                    /**
                     * Verifies a Phone message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Phone message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Phone
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Phone;

                    /**
                     * Creates a plain object from a Phone message. Also converts values to other types if specified.
                     * @param message Phone
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Phone, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Phone to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Phone {

                    /** PhoneType enum. */
                    enum PhoneType {
                        PHONE_TYPE_UNSPECIFIED = 0,
                        LANDLINE = 1,
                        MOBILE = 2,
                        FAX = 3,
                        PAGER = 4,
                        TTY_OR_TDD = 5,
                        VOICEMAIL = 6,
                        VIRTUAL = 7,
                        VOIP = 8,
                        MOBILE_OR_LANDLINE = 9
                    }
                }

                /** Properties of a PersonalUri. */
                interface IPersonalUri {

                    /** PersonalUri uri */
                    uri?: (string|null);
                }

                /** Represents a PersonalUri. */
                class PersonalUri implements IPersonalUri {

                    /**
                     * Constructs a new PersonalUri.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPersonalUri);

                    /** PersonalUri uri. */
                    public uri: string;

                    /**
                     * Creates a new PersonalUri instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PersonalUri instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPersonalUri): google.cloud.talent.v4beta1.PersonalUri;

                    /**
                     * Encodes the specified PersonalUri message. Does not implicitly {@link google.cloud.talent.v4beta1.PersonalUri.verify|verify} messages.
                     * @param message PersonalUri message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPersonalUri, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PersonalUri message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.PersonalUri.verify|verify} messages.
                     * @param message PersonalUri message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPersonalUri, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PersonalUri message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PersonalUri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.PersonalUri;

                    /**
                     * Decodes a PersonalUri message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PersonalUri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.PersonalUri;

                    /**
                     * Verifies a PersonalUri message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PersonalUri message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PersonalUri
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.PersonalUri;

                    /**
                     * Creates a plain object from a PersonalUri message. Also converts values to other types if specified.
                     * @param message PersonalUri
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.PersonalUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PersonalUri to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AdditionalContactInfo. */
                interface IAdditionalContactInfo {

                    /** AdditionalContactInfo usage */
                    usage?: (google.cloud.talent.v4beta1.ContactInfoUsage|null);

                    /** AdditionalContactInfo name */
                    name?: (string|null);

                    /** AdditionalContactInfo contactId */
                    contactId?: (string|null);
                }

                /** Represents an AdditionalContactInfo. */
                class AdditionalContactInfo implements IAdditionalContactInfo {

                    /**
                     * Constructs a new AdditionalContactInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IAdditionalContactInfo);

                    /** AdditionalContactInfo usage. */
                    public usage: google.cloud.talent.v4beta1.ContactInfoUsage;

                    /** AdditionalContactInfo name. */
                    public name: string;

                    /** AdditionalContactInfo contactId. */
                    public contactId: string;

                    /**
                     * Creates a new AdditionalContactInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AdditionalContactInfo instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IAdditionalContactInfo): google.cloud.talent.v4beta1.AdditionalContactInfo;

                    /**
                     * Encodes the specified AdditionalContactInfo message. Does not implicitly {@link google.cloud.talent.v4beta1.AdditionalContactInfo.verify|verify} messages.
                     * @param message AdditionalContactInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IAdditionalContactInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AdditionalContactInfo message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.AdditionalContactInfo.verify|verify} messages.
                     * @param message AdditionalContactInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IAdditionalContactInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AdditionalContactInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AdditionalContactInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.AdditionalContactInfo;

                    /**
                     * Decodes an AdditionalContactInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AdditionalContactInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.AdditionalContactInfo;

                    /**
                     * Verifies an AdditionalContactInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AdditionalContactInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AdditionalContactInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.AdditionalContactInfo;

                    /**
                     * Creates a plain object from an AdditionalContactInfo message. Also converts values to other types if specified.
                     * @param message AdditionalContactInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.AdditionalContactInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AdditionalContactInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EmploymentRecord. */
                interface IEmploymentRecord {

                    /** EmploymentRecord startDate */
                    startDate?: (google.type.IDate|null);

                    /** EmploymentRecord endDate */
                    endDate?: (google.type.IDate|null);

                    /** EmploymentRecord employerName */
                    employerName?: (string|null);

                    /** EmploymentRecord divisionName */
                    divisionName?: (string|null);

                    /** EmploymentRecord address */
                    address?: (google.cloud.talent.v4beta1.IAddress|null);

                    /** EmploymentRecord jobTitle */
                    jobTitle?: (string|null);

                    /** EmploymentRecord jobDescription */
                    jobDescription?: (string|null);

                    /** EmploymentRecord isSupervisor */
                    isSupervisor?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord isSelfEmployed */
                    isSelfEmployed?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord isCurrent */
                    isCurrent?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord jobTitleSnippet */
                    jobTitleSnippet?: (string|null);

                    /** EmploymentRecord jobDescriptionSnippet */
                    jobDescriptionSnippet?: (string|null);

                    /** EmploymentRecord employerNameSnippet */
                    employerNameSnippet?: (string|null);
                }

                /** Represents an EmploymentRecord. */
                class EmploymentRecord implements IEmploymentRecord {

                    /**
                     * Constructs a new EmploymentRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IEmploymentRecord);

                    /** EmploymentRecord startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** EmploymentRecord endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** EmploymentRecord employerName. */
                    public employerName: string;

                    /** EmploymentRecord divisionName. */
                    public divisionName: string;

                    /** EmploymentRecord address. */
                    public address?: (google.cloud.talent.v4beta1.IAddress|null);

                    /** EmploymentRecord jobTitle. */
                    public jobTitle: string;

                    /** EmploymentRecord jobDescription. */
                    public jobDescription: string;

                    /** EmploymentRecord isSupervisor. */
                    public isSupervisor?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord isSelfEmployed. */
                    public isSelfEmployed?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord isCurrent. */
                    public isCurrent?: (google.protobuf.IBoolValue|null);

                    /** EmploymentRecord jobTitleSnippet. */
                    public jobTitleSnippet: string;

                    /** EmploymentRecord jobDescriptionSnippet. */
                    public jobDescriptionSnippet: string;

                    /** EmploymentRecord employerNameSnippet. */
                    public employerNameSnippet: string;

                    /**
                     * Creates a new EmploymentRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmploymentRecord instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IEmploymentRecord): google.cloud.talent.v4beta1.EmploymentRecord;

                    /**
                     * Encodes the specified EmploymentRecord message. Does not implicitly {@link google.cloud.talent.v4beta1.EmploymentRecord.verify|verify} messages.
                     * @param message EmploymentRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IEmploymentRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmploymentRecord message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.EmploymentRecord.verify|verify} messages.
                     * @param message EmploymentRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IEmploymentRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmploymentRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmploymentRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.EmploymentRecord;

                    /**
                     * Decodes an EmploymentRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmploymentRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.EmploymentRecord;

                    /**
                     * Verifies an EmploymentRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmploymentRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmploymentRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.EmploymentRecord;

                    /**
                     * Creates a plain object from an EmploymentRecord message. Also converts values to other types if specified.
                     * @param message EmploymentRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.EmploymentRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmploymentRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EducationRecord. */
                interface IEducationRecord {

                    /** EducationRecord startDate */
                    startDate?: (google.type.IDate|null);

                    /** EducationRecord endDate */
                    endDate?: (google.type.IDate|null);

                    /** EducationRecord expectedGraduationDate */
                    expectedGraduationDate?: (google.type.IDate|null);

                    /** EducationRecord schoolName */
                    schoolName?: (string|null);

                    /** EducationRecord address */
                    address?: (google.cloud.talent.v4beta1.IAddress|null);

                    /** EducationRecord degreeDescription */
                    degreeDescription?: (string|null);

                    /** EducationRecord structuredDegree */
                    structuredDegree?: (google.cloud.talent.v4beta1.IDegree|null);

                    /** EducationRecord description */
                    description?: (string|null);

                    /** EducationRecord isCurrent */
                    isCurrent?: (google.protobuf.IBoolValue|null);

                    /** EducationRecord schoolNameSnippet */
                    schoolNameSnippet?: (string|null);

                    /** EducationRecord degreeSnippet */
                    degreeSnippet?: (string|null);
                }

                /** Represents an EducationRecord. */
                class EducationRecord implements IEducationRecord {

                    /**
                     * Constructs a new EducationRecord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IEducationRecord);

                    /** EducationRecord startDate. */
                    public startDate?: (google.type.IDate|null);

                    /** EducationRecord endDate. */
                    public endDate?: (google.type.IDate|null);

                    /** EducationRecord expectedGraduationDate. */
                    public expectedGraduationDate?: (google.type.IDate|null);

                    /** EducationRecord schoolName. */
                    public schoolName: string;

                    /** EducationRecord address. */
                    public address?: (google.cloud.talent.v4beta1.IAddress|null);

                    /** EducationRecord degreeDescription. */
                    public degreeDescription: string;

                    /** EducationRecord structuredDegree. */
                    public structuredDegree?: (google.cloud.talent.v4beta1.IDegree|null);

                    /** EducationRecord description. */
                    public description: string;

                    /** EducationRecord isCurrent. */
                    public isCurrent?: (google.protobuf.IBoolValue|null);

                    /** EducationRecord schoolNameSnippet. */
                    public schoolNameSnippet: string;

                    /** EducationRecord degreeSnippet. */
                    public degreeSnippet: string;

                    /** EducationRecord degree. */
                    public degree?: ("degreeDescription"|"structuredDegree");

                    /**
                     * Creates a new EducationRecord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EducationRecord instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IEducationRecord): google.cloud.talent.v4beta1.EducationRecord;

                    /**
                     * Encodes the specified EducationRecord message. Does not implicitly {@link google.cloud.talent.v4beta1.EducationRecord.verify|verify} messages.
                     * @param message EducationRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IEducationRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EducationRecord message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.EducationRecord.verify|verify} messages.
                     * @param message EducationRecord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IEducationRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EducationRecord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EducationRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.EducationRecord;

                    /**
                     * Decodes an EducationRecord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EducationRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.EducationRecord;

                    /**
                     * Verifies an EducationRecord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EducationRecord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EducationRecord
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.EducationRecord;

                    /**
                     * Creates a plain object from an EducationRecord message. Also converts values to other types if specified.
                     * @param message EducationRecord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.EducationRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EducationRecord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Degree. */
                interface IDegree {

                    /** Degree degreeType */
                    degreeType?: (google.cloud.talent.v4beta1.DegreeType|null);

                    /** Degree degreeName */
                    degreeName?: (string|null);

                    /** Degree fieldsOfStudy */
                    fieldsOfStudy?: (string[]|null);
                }

                /** Represents a Degree. */
                class Degree implements IDegree {

                    /**
                     * Constructs a new Degree.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDegree);

                    /** Degree degreeType. */
                    public degreeType: google.cloud.talent.v4beta1.DegreeType;

                    /** Degree degreeName. */
                    public degreeName: string;

                    /** Degree fieldsOfStudy. */
                    public fieldsOfStudy: string[];

                    /**
                     * Creates a new Degree instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Degree instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDegree): google.cloud.talent.v4beta1.Degree;

                    /**
                     * Encodes the specified Degree message. Does not implicitly {@link google.cloud.talent.v4beta1.Degree.verify|verify} messages.
                     * @param message Degree message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDegree, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Degree message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Degree.verify|verify} messages.
                     * @param message Degree message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDegree, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Degree message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Degree
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Degree;

                    /**
                     * Decodes a Degree message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Degree
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Degree;

                    /**
                     * Verifies a Degree message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Degree message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Degree
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Degree;

                    /**
                     * Creates a plain object from a Degree message. Also converts values to other types if specified.
                     * @param message Degree
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Degree, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Degree to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Activity. */
                interface IActivity {

                    /** Activity displayName */
                    displayName?: (string|null);

                    /** Activity description */
                    description?: (string|null);

                    /** Activity uri */
                    uri?: (string|null);

                    /** Activity createDate */
                    createDate?: (google.type.IDate|null);

                    /** Activity updateDate */
                    updateDate?: (google.type.IDate|null);

                    /** Activity teamMembers */
                    teamMembers?: (string[]|null);

                    /** Activity skillsUsed */
                    skillsUsed?: (google.cloud.talent.v4beta1.ISkill[]|null);

                    /** Activity activityNameSnippet */
                    activityNameSnippet?: (string|null);

                    /** Activity activityDescriptionSnippet */
                    activityDescriptionSnippet?: (string|null);

                    /** Activity skillsUsedSnippet */
                    skillsUsedSnippet?: (string[]|null);
                }

                /** Represents an Activity. */
                class Activity implements IActivity {

                    /**
                     * Constructs a new Activity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IActivity);

                    /** Activity displayName. */
                    public displayName: string;

                    /** Activity description. */
                    public description: string;

                    /** Activity uri. */
                    public uri: string;

                    /** Activity createDate. */
                    public createDate?: (google.type.IDate|null);

                    /** Activity updateDate. */
                    public updateDate?: (google.type.IDate|null);

                    /** Activity teamMembers. */
                    public teamMembers: string[];

                    /** Activity skillsUsed. */
                    public skillsUsed: google.cloud.talent.v4beta1.ISkill[];

                    /** Activity activityNameSnippet. */
                    public activityNameSnippet: string;

                    /** Activity activityDescriptionSnippet. */
                    public activityDescriptionSnippet: string;

                    /** Activity skillsUsedSnippet. */
                    public skillsUsedSnippet: string[];

                    /**
                     * Creates a new Activity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Activity instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IActivity): google.cloud.talent.v4beta1.Activity;

                    /**
                     * Encodes the specified Activity message. Does not implicitly {@link google.cloud.talent.v4beta1.Activity.verify|verify} messages.
                     * @param message Activity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Activity message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Activity.verify|verify} messages.
                     * @param message Activity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Activity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Activity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Activity;

                    /**
                     * Decodes an Activity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Activity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Activity;

                    /**
                     * Verifies an Activity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Activity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Activity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Activity;

                    /**
                     * Creates a plain object from an Activity message. Also converts values to other types if specified.
                     * @param message Activity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Activity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Activity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Publication. */
                interface IPublication {

                    /** Publication authors */
                    authors?: (string[]|null);

                    /** Publication title */
                    title?: (string|null);

                    /** Publication description */
                    description?: (string|null);

                    /** Publication journal */
                    journal?: (string|null);

                    /** Publication volume */
                    volume?: (string|null);

                    /** Publication publisher */
                    publisher?: (string|null);

                    /** Publication publicationDate */
                    publicationDate?: (google.type.IDate|null);

                    /** Publication publicationType */
                    publicationType?: (string|null);

                    /** Publication isbn */
                    isbn?: (string|null);
                }

                /** Represents a Publication. */
                class Publication implements IPublication {

                    /**
                     * Constructs a new Publication.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPublication);

                    /** Publication authors. */
                    public authors: string[];

                    /** Publication title. */
                    public title: string;

                    /** Publication description. */
                    public description: string;

                    /** Publication journal. */
                    public journal: string;

                    /** Publication volume. */
                    public volume: string;

                    /** Publication publisher. */
                    public publisher: string;

                    /** Publication publicationDate. */
                    public publicationDate?: (google.type.IDate|null);

                    /** Publication publicationType. */
                    public publicationType: string;

                    /** Publication isbn. */
                    public isbn: string;

                    /**
                     * Creates a new Publication instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Publication instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPublication): google.cloud.talent.v4beta1.Publication;

                    /**
                     * Encodes the specified Publication message. Does not implicitly {@link google.cloud.talent.v4beta1.Publication.verify|verify} messages.
                     * @param message Publication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPublication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Publication message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Publication.verify|verify} messages.
                     * @param message Publication message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPublication, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Publication message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Publication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Publication;

                    /**
                     * Decodes a Publication message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Publication
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Publication;

                    /**
                     * Verifies a Publication message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Publication message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Publication
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Publication;

                    /**
                     * Creates a plain object from a Publication message. Also converts values to other types if specified.
                     * @param message Publication
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Publication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Publication to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Patent. */
                interface IPatent {

                    /** Patent displayName */
                    displayName?: (string|null);

                    /** Patent inventors */
                    inventors?: (string[]|null);

                    /** Patent patentStatus */
                    patentStatus?: (string|null);

                    /** Patent patentStatusDate */
                    patentStatusDate?: (google.type.IDate|null);

                    /** Patent patentFilingDate */
                    patentFilingDate?: (google.type.IDate|null);

                    /** Patent patentOffice */
                    patentOffice?: (string|null);

                    /** Patent patentNumber */
                    patentNumber?: (string|null);

                    /** Patent patentDescription */
                    patentDescription?: (string|null);

                    /** Patent skillsUsed */
                    skillsUsed?: (google.cloud.talent.v4beta1.ISkill[]|null);
                }

                /** Represents a Patent. */
                class Patent implements IPatent {

                    /**
                     * Constructs a new Patent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IPatent);

                    /** Patent displayName. */
                    public displayName: string;

                    /** Patent inventors. */
                    public inventors: string[];

                    /** Patent patentStatus. */
                    public patentStatus: string;

                    /** Patent patentStatusDate. */
                    public patentStatusDate?: (google.type.IDate|null);

                    /** Patent patentFilingDate. */
                    public patentFilingDate?: (google.type.IDate|null);

                    /** Patent patentOffice. */
                    public patentOffice: string;

                    /** Patent patentNumber. */
                    public patentNumber: string;

                    /** Patent patentDescription. */
                    public patentDescription: string;

                    /** Patent skillsUsed. */
                    public skillsUsed: google.cloud.talent.v4beta1.ISkill[];

                    /**
                     * Creates a new Patent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Patent instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IPatent): google.cloud.talent.v4beta1.Patent;

                    /**
                     * Encodes the specified Patent message. Does not implicitly {@link google.cloud.talent.v4beta1.Patent.verify|verify} messages.
                     * @param message Patent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IPatent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Patent message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Patent.verify|verify} messages.
                     * @param message Patent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IPatent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Patent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Patent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Patent;

                    /**
                     * Decodes a Patent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Patent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Patent;

                    /**
                     * Verifies a Patent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Patent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Patent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Patent;

                    /**
                     * Creates a plain object from a Patent message. Also converts values to other types if specified.
                     * @param message Patent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Patent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Patent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a TenantService */
                class TenantService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TenantService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TenantService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TenantService;

                    /**
                     * Calls CreateTenant.
                     * @param request CreateTenantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tenant
                     */
                    public createTenant(request: google.cloud.talent.v4beta1.ICreateTenantRequest, callback: google.cloud.talent.v4beta1.TenantService.CreateTenantCallback): void;

                    /**
                     * Calls CreateTenant.
                     * @param request CreateTenantRequest message or plain object
                     * @returns Promise
                     */
                    public createTenant(request: google.cloud.talent.v4beta1.ICreateTenantRequest): Promise<google.cloud.talent.v4beta1.Tenant>;

                    /**
                     * Calls GetTenant.
                     * @param request GetTenantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tenant
                     */
                    public getTenant(request: google.cloud.talent.v4beta1.IGetTenantRequest, callback: google.cloud.talent.v4beta1.TenantService.GetTenantCallback): void;

                    /**
                     * Calls GetTenant.
                     * @param request GetTenantRequest message or plain object
                     * @returns Promise
                     */
                    public getTenant(request: google.cloud.talent.v4beta1.IGetTenantRequest): Promise<google.cloud.talent.v4beta1.Tenant>;

                    /**
                     * Calls UpdateTenant.
                     * @param request UpdateTenantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tenant
                     */
                    public updateTenant(request: google.cloud.talent.v4beta1.IUpdateTenantRequest, callback: google.cloud.talent.v4beta1.TenantService.UpdateTenantCallback): void;

                    /**
                     * Calls UpdateTenant.
                     * @param request UpdateTenantRequest message or plain object
                     * @returns Promise
                     */
                    public updateTenant(request: google.cloud.talent.v4beta1.IUpdateTenantRequest): Promise<google.cloud.talent.v4beta1.Tenant>;

                    /**
                     * Calls DeleteTenant.
                     * @param request DeleteTenantRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTenant(request: google.cloud.talent.v4beta1.IDeleteTenantRequest, callback: google.cloud.talent.v4beta1.TenantService.DeleteTenantCallback): void;

                    /**
                     * Calls DeleteTenant.
                     * @param request DeleteTenantRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTenant(request: google.cloud.talent.v4beta1.IDeleteTenantRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListTenants.
                     * @param request ListTenantsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTenantsResponse
                     */
                    public listTenants(request: google.cloud.talent.v4beta1.IListTenantsRequest, callback: google.cloud.talent.v4beta1.TenantService.ListTenantsCallback): void;

                    /**
                     * Calls ListTenants.
                     * @param request ListTenantsRequest message or plain object
                     * @returns Promise
                     */
                    public listTenants(request: google.cloud.talent.v4beta1.IListTenantsRequest): Promise<google.cloud.talent.v4beta1.ListTenantsResponse>;
                }

                namespace TenantService {

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.TenantService#createTenant}.
                     * @param error Error, if any
                     * @param [response] Tenant
                     */
                    type CreateTenantCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Tenant) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.TenantService#getTenant}.
                     * @param error Error, if any
                     * @param [response] Tenant
                     */
                    type GetTenantCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Tenant) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.TenantService#updateTenant}.
                     * @param error Error, if any
                     * @param [response] Tenant
                     */
                    type UpdateTenantCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.Tenant) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.TenantService#deleteTenant}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTenantCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.talent.v4beta1.TenantService#listTenants}.
                     * @param error Error, if any
                     * @param [response] ListTenantsResponse
                     */
                    type ListTenantsCallback = (error: (Error|null), response?: google.cloud.talent.v4beta1.ListTenantsResponse) => void;
                }

                /** Properties of a CreateTenantRequest. */
                interface ICreateTenantRequest {

                    /** CreateTenantRequest parent */
                    parent?: (string|null);

                    /** CreateTenantRequest tenant */
                    tenant?: (google.cloud.talent.v4beta1.ITenant|null);
                }

                /** Represents a CreateTenantRequest. */
                class CreateTenantRequest implements ICreateTenantRequest {

                    /**
                     * Constructs a new CreateTenantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ICreateTenantRequest);

                    /** CreateTenantRequest parent. */
                    public parent: string;

                    /** CreateTenantRequest tenant. */
                    public tenant?: (google.cloud.talent.v4beta1.ITenant|null);

                    /**
                     * Creates a new CreateTenantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTenantRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ICreateTenantRequest): google.cloud.talent.v4beta1.CreateTenantRequest;

                    /**
                     * Encodes the specified CreateTenantRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.CreateTenantRequest.verify|verify} messages.
                     * @param message CreateTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ICreateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTenantRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.CreateTenantRequest.verify|verify} messages.
                     * @param message CreateTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ICreateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTenantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.CreateTenantRequest;

                    /**
                     * Decodes a CreateTenantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.CreateTenantRequest;

                    /**
                     * Verifies a CreateTenantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTenantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTenantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.CreateTenantRequest;

                    /**
                     * Creates a plain object from a CreateTenantRequest message. Also converts values to other types if specified.
                     * @param message CreateTenantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.CreateTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTenantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTenantRequest. */
                interface IGetTenantRequest {

                    /** GetTenantRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTenantRequest. */
                class GetTenantRequest implements IGetTenantRequest {

                    /**
                     * Constructs a new GetTenantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IGetTenantRequest);

                    /** GetTenantRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTenantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTenantRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IGetTenantRequest): google.cloud.talent.v4beta1.GetTenantRequest;

                    /**
                     * Encodes the specified GetTenantRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.GetTenantRequest.verify|verify} messages.
                     * @param message GetTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IGetTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTenantRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.GetTenantRequest.verify|verify} messages.
                     * @param message GetTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IGetTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTenantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.GetTenantRequest;

                    /**
                     * Decodes a GetTenantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.GetTenantRequest;

                    /**
                     * Verifies a GetTenantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTenantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTenantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.GetTenantRequest;

                    /**
                     * Creates a plain object from a GetTenantRequest message. Also converts values to other types if specified.
                     * @param message GetTenantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.GetTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTenantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTenantRequest. */
                interface IUpdateTenantRequest {

                    /** UpdateTenantRequest tenant */
                    tenant?: (google.cloud.talent.v4beta1.ITenant|null);

                    /** UpdateTenantRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTenantRequest. */
                class UpdateTenantRequest implements IUpdateTenantRequest {

                    /**
                     * Constructs a new UpdateTenantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IUpdateTenantRequest);

                    /** UpdateTenantRequest tenant. */
                    public tenant?: (google.cloud.talent.v4beta1.ITenant|null);

                    /** UpdateTenantRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTenantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTenantRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IUpdateTenantRequest): google.cloud.talent.v4beta1.UpdateTenantRequest;

                    /**
                     * Encodes the specified UpdateTenantRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateTenantRequest.verify|verify} messages.
                     * @param message UpdateTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IUpdateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTenantRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.UpdateTenantRequest.verify|verify} messages.
                     * @param message UpdateTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IUpdateTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTenantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.UpdateTenantRequest;

                    /**
                     * Decodes an UpdateTenantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.UpdateTenantRequest;

                    /**
                     * Verifies an UpdateTenantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTenantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTenantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.UpdateTenantRequest;

                    /**
                     * Creates a plain object from an UpdateTenantRequest message. Also converts values to other types if specified.
                     * @param message UpdateTenantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.UpdateTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTenantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTenantRequest. */
                interface IDeleteTenantRequest {

                    /** DeleteTenantRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTenantRequest. */
                class DeleteTenantRequest implements IDeleteTenantRequest {

                    /**
                     * Constructs a new DeleteTenantRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IDeleteTenantRequest);

                    /** DeleteTenantRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTenantRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTenantRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IDeleteTenantRequest): google.cloud.talent.v4beta1.DeleteTenantRequest;

                    /**
                     * Encodes the specified DeleteTenantRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteTenantRequest.verify|verify} messages.
                     * @param message DeleteTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IDeleteTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTenantRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.DeleteTenantRequest.verify|verify} messages.
                     * @param message DeleteTenantRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IDeleteTenantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTenantRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.DeleteTenantRequest;

                    /**
                     * Decodes a DeleteTenantRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTenantRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.DeleteTenantRequest;

                    /**
                     * Verifies a DeleteTenantRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTenantRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTenantRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.DeleteTenantRequest;

                    /**
                     * Creates a plain object from a DeleteTenantRequest message. Also converts values to other types if specified.
                     * @param message DeleteTenantRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.DeleteTenantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTenantRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTenantsRequest. */
                interface IListTenantsRequest {

                    /** ListTenantsRequest parent */
                    parent?: (string|null);

                    /** ListTenantsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTenantsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListTenantsRequest. */
                class ListTenantsRequest implements IListTenantsRequest {

                    /**
                     * Constructs a new ListTenantsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListTenantsRequest);

                    /** ListTenantsRequest parent. */
                    public parent: string;

                    /** ListTenantsRequest pageToken. */
                    public pageToken: string;

                    /** ListTenantsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListTenantsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTenantsRequest instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListTenantsRequest): google.cloud.talent.v4beta1.ListTenantsRequest;

                    /**
                     * Encodes the specified ListTenantsRequest message. Does not implicitly {@link google.cloud.talent.v4beta1.ListTenantsRequest.verify|verify} messages.
                     * @param message ListTenantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListTenantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTenantsRequest message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListTenantsRequest.verify|verify} messages.
                     * @param message ListTenantsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListTenantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTenantsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTenantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListTenantsRequest;

                    /**
                     * Decodes a ListTenantsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTenantsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListTenantsRequest;

                    /**
                     * Verifies a ListTenantsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTenantsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTenantsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListTenantsRequest;

                    /**
                     * Creates a plain object from a ListTenantsRequest message. Also converts values to other types if specified.
                     * @param message ListTenantsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListTenantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTenantsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTenantsResponse. */
                interface IListTenantsResponse {

                    /** ListTenantsResponse tenants */
                    tenants?: (google.cloud.talent.v4beta1.ITenant[]|null);

                    /** ListTenantsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTenantsResponse metadata */
                    metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);
                }

                /** Represents a ListTenantsResponse. */
                class ListTenantsResponse implements IListTenantsResponse {

                    /**
                     * Constructs a new ListTenantsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.IListTenantsResponse);

                    /** ListTenantsResponse tenants. */
                    public tenants: google.cloud.talent.v4beta1.ITenant[];

                    /** ListTenantsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTenantsResponse metadata. */
                    public metadata?: (google.cloud.talent.v4beta1.IResponseMetadata|null);

                    /**
                     * Creates a new ListTenantsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTenantsResponse instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.IListTenantsResponse): google.cloud.talent.v4beta1.ListTenantsResponse;

                    /**
                     * Encodes the specified ListTenantsResponse message. Does not implicitly {@link google.cloud.talent.v4beta1.ListTenantsResponse.verify|verify} messages.
                     * @param message ListTenantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.IListTenantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTenantsResponse message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.ListTenantsResponse.verify|verify} messages.
                     * @param message ListTenantsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.IListTenantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTenantsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTenantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.ListTenantsResponse;

                    /**
                     * Decodes a ListTenantsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTenantsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.ListTenantsResponse;

                    /**
                     * Verifies a ListTenantsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTenantsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTenantsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.ListTenantsResponse;

                    /**
                     * Creates a plain object from a ListTenantsResponse message. Also converts values to other types if specified.
                     * @param message ListTenantsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.ListTenantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTenantsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Tenant. */
                interface ITenant {

                    /** Tenant name */
                    name?: (string|null);

                    /** Tenant externalId */
                    externalId?: (string|null);

                    /** Tenant usageType */
                    usageType?: (google.cloud.talent.v4beta1.Tenant.DataUsageType|null);

                    /** Tenant keywordSearchableProfileCustomAttributes */
                    keywordSearchableProfileCustomAttributes?: (string[]|null);
                }

                /** Represents a Tenant. */
                class Tenant implements ITenant {

                    /**
                     * Constructs a new Tenant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.talent.v4beta1.ITenant);

                    /** Tenant name. */
                    public name: string;

                    /** Tenant externalId. */
                    public externalId: string;

                    /** Tenant usageType. */
                    public usageType: google.cloud.talent.v4beta1.Tenant.DataUsageType;

                    /** Tenant keywordSearchableProfileCustomAttributes. */
                    public keywordSearchableProfileCustomAttributes: string[];

                    /**
                     * Creates a new Tenant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tenant instance
                     */
                    public static create(properties?: google.cloud.talent.v4beta1.ITenant): google.cloud.talent.v4beta1.Tenant;

                    /**
                     * Encodes the specified Tenant message. Does not implicitly {@link google.cloud.talent.v4beta1.Tenant.verify|verify} messages.
                     * @param message Tenant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.talent.v4beta1.ITenant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tenant message, length delimited. Does not implicitly {@link google.cloud.talent.v4beta1.Tenant.verify|verify} messages.
                     * @param message Tenant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.talent.v4beta1.ITenant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tenant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tenant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.talent.v4beta1.Tenant;

                    /**
                     * Decodes a Tenant message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tenant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.talent.v4beta1.Tenant;

                    /**
                     * Verifies a Tenant message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tenant message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tenant
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.talent.v4beta1.Tenant;

                    /**
                     * Creates a plain object from a Tenant message. Also converts values to other types if specified.
                     * @param message Tenant
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.talent.v4beta1.Tenant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tenant to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Tenant {

                    /** DataUsageType enum. */
                    enum DataUsageType {
                        DATA_USAGE_TYPE_UNSPECIFIED = 0,
                        AGGREGATED = 1,
                        ISOLATED = 2
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PostalAddress. */
        interface IPostalAddress {

            /** PostalAddress revision */
            revision?: (number|null);

            /** PostalAddress regionCode */
            regionCode?: (string|null);

            /** PostalAddress languageCode */
            languageCode?: (string|null);

            /** PostalAddress postalCode */
            postalCode?: (string|null);

            /** PostalAddress sortingCode */
            sortingCode?: (string|null);

            /** PostalAddress administrativeArea */
            administrativeArea?: (string|null);

            /** PostalAddress locality */
            locality?: (string|null);

            /** PostalAddress sublocality */
            sublocality?: (string|null);

            /** PostalAddress addressLines */
            addressLines?: (string[]|null);

            /** PostalAddress recipients */
            recipients?: (string[]|null);

            /** PostalAddress organization */
            organization?: (string|null);
        }

        /** Represents a PostalAddress. */
        class PostalAddress implements IPostalAddress {

            /**
             * Constructs a new PostalAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IPostalAddress);

            /** PostalAddress revision. */
            public revision: number;

            /** PostalAddress regionCode. */
            public regionCode: string;

            /** PostalAddress languageCode. */
            public languageCode: string;

            /** PostalAddress postalCode. */
            public postalCode: string;

            /** PostalAddress sortingCode. */
            public sortingCode: string;

            /** PostalAddress administrativeArea. */
            public administrativeArea: string;

            /** PostalAddress locality. */
            public locality: string;

            /** PostalAddress sublocality. */
            public sublocality: string;

            /** PostalAddress addressLines. */
            public addressLines: string[];

            /** PostalAddress recipients. */
            public recipients: string[];

            /** PostalAddress organization. */
            public organization: string;

            /**
             * Creates a new PostalAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PostalAddress instance
             */
            public static create(properties?: google.type.IPostalAddress): google.type.PostalAddress;

            /**
             * Encodes the specified PostalAddress message. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostalAddress message, length delimited. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.PostalAddress;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.PostalAddress;

            /**
             * Verifies a PostalAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostalAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostalAddress
             */
            public static fromObject(object: { [k: string]: any }): google.type.PostalAddress;

            /**
             * Creates a plain object from a PostalAddress message. Also converts values to other types if specified.
             * @param message PostalAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.PostalAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostalAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Creates a new TimeOfDay instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeOfDay instance
             */
            public static create(properties?: google.type.ITimeOfDay): google.type.TimeOfDay;

            /**
             * Encodes the specified TimeOfDay message. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeOfDay message, length delimited. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeOfDay;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeOfDay;

            /**
             * Verifies a TimeOfDay message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeOfDay message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeOfDay
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeOfDay;

            /**
             * Creates a plain object from a TimeOfDay message. Also converts values to other types if specified.
             * @param message TimeOfDay
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeOfDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeOfDay to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
