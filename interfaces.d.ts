declare namespace gg {
  interface MakeRequestResponseHeaders {
    [headerName: string]: {
      [index: number]: string;
    };
  }

  interface MakeRequestResponse {
    url: string;
    requestMethod: string;
    code: number;
    message: string;
    headers: MakeRequestResponseHeaders;
    contentEncoding: string;
    error: boolean;
    content: string;
  }
}
