declare namespace gg {
  /**
   * Displays a dialog with several buttons.
   * The return result depends on which of the buttons was pressed. The dialog can be canceled with the "Back" button (return code 0).
   * @example
   * gg.alert('Hello World!', true, false, false);
   * gg.alert('Hello World!', true);
   */
  function alert(message: string, positive?: boolean, negative?: boolean, neutral?: boolean): number | null

  /**
   * Performs a GET or POST request over HTTP or HTTPS.
   *
   * The first time the function is called, the user is asked to access the Internet. Request one for each script run. If the user declines access, all subsequent calls will immediately return an error. If allowed - will be processed immediately. Permission to access must be obtained each time the script is run.
   */
  function makeRequest(url: string, headers: { [key: string]: string }, data: string): MakeRequestResponse | string
}
