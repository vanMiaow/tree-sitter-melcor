package tree_sitter_melcor_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_melcor "github.com/vanmiaow/tree-sitter-melcor/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_melcor.Language())
	if language == nil {
		t.Errorf("Error loading Melcor grammar")
	}
}
