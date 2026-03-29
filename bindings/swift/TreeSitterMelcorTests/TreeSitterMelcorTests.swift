import XCTest
import SwiftTreeSitter
import TreeSitterMelcor

final class TreeSitterMelcorTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_melcor())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Melcor grammar")
    }
}
