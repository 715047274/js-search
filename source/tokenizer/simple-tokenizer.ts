/// <reference path="tokenizer.ts" />

module JsSearch {

  /**
   * Simple tokenizer that splits strings on whitespace characters and returns an array of all non-empty substrings.
   */
  export class SimpleTokenizer implements ITokenizer {

    /**
     * @inheritDocs
     */
    public tokenize(text:string):Array<string> {
      return text.split(/[^a-zа-яё 0-9\-']+/i)
        .filter(function(text:string):boolean {
          return !!text; // Filter empty tokens
        });
    }
  };
};
