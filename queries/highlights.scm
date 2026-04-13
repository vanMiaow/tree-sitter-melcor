
; program
(program (prog_name) @markup.underline) @type

; identifier
(id) @variable
; xx_xx
(record first: (id) @symbol)
; xx_id
((record first: (id) @parameter) (#match? @parameter "_[Ii][Dd]$"))
; xx_input
((record first: (id) @error) (#match? @error "_[Ii][Nn][Pp][Uu][Tt]$"))

; define
(define) @define
; macro
(macro) @keyword

; number
[(int) (float)] @number
; row
(record first: (int) @character)

; string
(string) @string

; operator
((punct) @operator (#match? @operator "[-+*/]"))
; punctuation
((punct) @punctuation (#match? @punctuation "[(),]"))
; backslash
(backslash) @comment

; comment
(comment) @comment

