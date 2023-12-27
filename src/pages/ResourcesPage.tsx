export default function ResourcesPage() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tighter mb-2">Resources</h2>

      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-2xl font-bold tracking-tighter">Specification</h3>

        <ul>
          <li>
            <a className="link " href="https://en.wikipedia.org/wiki/Portable_Game_Notation">
              Portable Game Notation (Wikipedia)
            </a>
            : Very short summary of the essentials.
          </li>
          <li>
            <a className="link " href="https://github.com/mliebelt/pgn-spec-commented/blob/main/pgn-specification.md">
              PGN Specification
            </a>
            : Specification and Implementation Guide
          </li>
          <li>
            <a className="link " href="https://github.com/mliebelt/pgn-spec-commented/blob/main/pgn-spec-supplement.md">
              PGN Specification Supplement
            </a>
            : Addition for adding graphical elements, clock values, eval, ...
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-2xl font-bold tracking-tighter">Libraries</h3>
        <ul>
          <li>
            <a className="link " href="https://github.com/niklasf/chessops">
              niklasf / chessops (GitHub)
            </a>
            : Chess and chess variant rules and operations in TypeScript.
          </li>
          <li>
            <a className="link " href="https://github.com/lichess-org/pgn-viewer">
              lichess-org / pgn-viewer (GitHub)
            </a>
            : PGN viewer widget, designed to be embedded in content pages.
          </li>
          <li>
            <a className="link " href="https://github.com/jhlywa/chess.js">
              jhlywa / chess.js (GitHub)
            </a>
            : A TypeScript chess library used for chess move generation/validation, piece placement/movement, and
            check/checkmate/stalemate detection.
          </li>
          <li>
            <a className="link " href="https://github.com/lichess-org/chessground">
              lichess-org / chessground (GitHub)
            </a>
            : Chessground is a free/libre open source chess UI.
          </li>
        </ul>
      </div>
    </>
  )
}
