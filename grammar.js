/**
 * @file Melcor grammar for tree-sitter
 * @author vanMiaow <mf.1997@live.cn>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "melcor",

  extras: $ => [
    /\s/,
    $.comment
  ],

  rules: {
    // source file
    source_file: $ => repeat(choice($.program, $.record)),

    // program
    program: $ => seq(
      optional(token(/end/i)),
      token(/program/i),
      $.prog_name,
      $._newline
    ),
    prog_name: _ => token(/melgen|melcor/i),

    // record
    record: $ => seq(
      field("first", choice(
        $.id,
        $.int,
        $.define,
        $.macro
      )),
      repeat(choice(
        $.id,
        $._number,
        $.string,
        $.macro,
        $.punct
      )),
      optional($.backslash),
      $._newline
    ),

    // identifier
    id: _ => token(/[A-Za-z][A-Za-z0-9_]*/),

    // preprocess
    macro: _ => token(/_[A-Za-z0-9_]*_/),
    define: _ => token(/#[A-Za-z]*/),

    // number
    _number: $ => choice($.float, $.int),
    int: _ => token(/\d+/),
    float: _ => token(/(\d+\.\d*|\.\d+)([DdEe][+-]?\d+)?/),

    // string
    string: _ => token(/'[^'\n]*'|"[^"\n]*"/),

    // punctuation
    punct: _ => token(/[-+*/(),]/),
    backslash: _ => token(/\\/),

    // miscellaneous
    comment: _ => token(/(\/\/|!)[^\n]*/),
    _newline: _ => token(/\r?\n/)
  }
});
