import { NostrEvent } from '@nostr-dev-kit/ndk'

export const NIP64_KIND = 64

export const EXAMPLE_KIND_1_EVENT_ID = 'nevent1qqs2kn0xfgz0mrt5ed67tfmq7mnmwj80j2a7pyvs53qeg9e4ms8kuqq83007e'
export const EXAMPLE_KIND_64_EVENT_ID = 'nevent1qvzqqqqqgqqzqg3sjumg4m8jndj202jvsdh85xzf4tplpawg9mwpa2679rsxkxdjen67jn'

export const BASIC_NIP64_EVENT: NostrEvent = {
  id: '<32-bytes lowercase hex-encoded sha256 of the serialized event data>',
  pubkey: '<32-bytes lowercase hex-encoded public key of the event creator>',
  created_at: Math.floor(Date.now() / 1_000),
  kind: NIP64_KIND,
  tags: [],
  content: `[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]

*`,
  sig: '<64-bytes lowercase hex of the signature of the sha256 hash of the serialized event data, which is the same as the "id" field>',
}

export const EXAMPLE_NIP64_PGN0 = `[Event "F/S Return Match"]
[Site "Belgrade, Serbia JUG"]
[Date "1992.11.04"]
[Round "29"]
[White "Fischer, Robert J."]
[Black "Spassky, Boris V."]
[Result "1/2-1/2"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 {This opening is called the Ruy Lopez.} 3... a6
4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7
11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5
Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6
23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5
hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5
35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6
Nf2 42. g4 Bd3 43. Re6 1/2-1/2`

export const EXAMPLE_NIP64_EVENT0: NostrEvent = {
  created_at: 1,
  content: EXAMPLE_NIP64_PGN0,
  tags: [],
  kind: NIP64_KIND,
  pubkey: '',
  id: '',
  sig: '',
}

export const EXAMPLE_NIP64_PGN1 = `[Event "USSR Championship"]
[Site "Moscow URS"]
[Date "1957.02.21"]
[Round "21"]
[White "Mikhail Tal"]
[Black "Alexander Kazimirovich Tolush"]
[Result "1-0"]
[ECO "E81"]
[Annotator "USER"]
[PlyCount "83"]
[EventDate "1957.??.??"]

{Let's start our journey through the imaginative, wonderful world of the games
of Mikhail Tal by examining his game against the old Soviet Master Alexander
Kazimirovich Tolush from the 21st USSR Championship, held in 1957. --- Tolush,
who would later become very famous as one of the trainers of the future World
Champion Boris Spassky, was very known for his sharp and attacking style - so
it is not surprising that his games against Mikhail Tal were often a spectacle
in their own right! --- The two players have already created a mind-boggling
masterpiece in the 1956 USSR Chess Championship (which will not be analyzed in
this article, although it was analyzed by Garry Kasparov in his book On My
Great Predecessors in the chapter about Tal).} 1. c4 {Throughout this career,
Tal was playing all four main moves by White, although he was mainly 1.e4
player - especially in his youth. Still, I guess he had his reasons for the
opening choice in this game - although it is not unfair to say that back in
1957, the significance of the opening stage at the top level was much less
significant compared to today.} Nf6 2. Nc3 g6 3. e4 d6 4. d4 Bg7 {The King's
Indian was brought to the forefront at the end of 1940s and beginning of 1950s
(particularly through the effors of Boleslavsky and Bronstein, among others)
so it is not a surprising opening choice for Tolush - especially when we
consider the traits of his style!} 5. f3 {The Saemisch variations is one of
the sharpest and arguably most critical ways of meeting the King's Indian
defence. The idea is to keep the center fluid, castle queenside and go for the
sharp g4-h4 attack. It has remained quite popular to this day. and was tested
extensively in one of the Karpov-Kasparov matches, although nowadays the
neural networks are suggesting some other ways as more critical.} e5 {This
typical central counterstrike, characteristic of the King's Indian defence, is
not the most popular move by today's standards as it reveals Black's
intentions prematurely, but we shouldn't judge the state of the opening theory
from 1957 too harshly. It has to be said that this move was played by some
strong players like Ivanchuk and Sindarov, so it has every right to exist.} 6.
Nge2 {A standard move in the Saemisch, defending the d4 point and intending
the Be3/Bg5-Qd2-O-O-O developing scheme. Once again - other moves are possible,
but I wouldn't want to delve too deeply in the opening stage of this game.}
Nbd7 {Also a bit strange as the knight is passive here and it blocks the
light-squared bishop, although some strong players have played this even in
2020s.} 7. Bg5 {[%cal Gh7h6,Gd1d2] Developing the bishop on a more active
square than e3 as the d4 pawn is not under the attack here. White is trying to
provoke h6.} (7. Be3 {[%cal Gd1d2] Is an equally valid alternative. White's
plan remains the same.}) 7... c6 {[%cal Gc6d5,Gd8a5] Taking the d5 square
under control and opening the queen's diagonal. Very standard procedure.} (7...
h6 8. Be3 {[%cal Re3h6] And now the h6 pawn can become an object of the attack.
}) 8. Qd2 O-O 9. d5 {[%csl Gc4,Gd5,Ge4] A very typical idea, closing the
center before starting the kingside attack. White is not yet hurrying with
castling and intends to keep the king in the center for a bit, as it turns out
it is more difficult for Black to create counterplay with the king in the
center compared to the king on the queenside.} c5 {[%csl Gc4,Rc5,Gd5,Rd6,Ge4,
Re5] This closing of the center was relatively a standard proceudre in the
past, but it is just bad for Black as now White has a free hand on the
kingside.} (9... Nc5 {It was much better to keep the tension between the pawns
and, say, move the knight and keep the d6 pawn defended.}) (9... h6 {The
modern engine also suggests this move, which is based on a nice tactical shot}
10. Bxh6 (10. Be3 {Should instead be played when Black can go} cxd5 11. cxd5 h5
{And now the fluidity of the kingside attack is prevented so Black has a much
better position than in the game, although White still remains better due to
the massive space advantage.}) 10... Nxe4 11. Nxe4 Qh4+) 10. g4 {[%csl Ge4,Gf3,
Gg4][%cal Ge2g3,Gh2h4,Gh4h5] The beginning of the standard procedure in the
Saemisch. White wants to follow things up with moves such as Ng3-h4-h5 and so
on.} (10. h4 {Is also possible as now the blockading} h5 {Doesn't work due to}
11. g4 hxg4 12. fxg4 {[%cal Rf6g4,Rg5d8,Gh4h5,Gf1h3] When the g4 pawn is
immune due to the pin and Black is in mortal danger.}) 10... a6 {Trying to
create counterplay on the queenside somehow, but Black is much, much slower.}
11. Ng3 {The standard attacking scheme in Saemisch. The knight goes to g3 and
h4-h5 is next on the agenda, while the knight can also contemplate jumping on
f5 in the future - as happens in this game.} Re8 {This is just pointless,
though.} (11... b5 {For better or for worse, Black should have started
counterplay on the queenside.}) 12. h4 {White's play is very easy and
straightforward while Black is struggling to create counterplay.} Qa5 {Black
tries to play for the b5 push now, but it is all very slow and shouldn't work.}
13. Bh6 {This logical move - exchanging the bishop that defends the king,
seems to be a bit premature as White is not yet fully developed and is
ignoring the play on the queenside. Although this is purely from the engine
perspective - it doesn't yet relinquish White's advantage - it just reduces it
somewhat.} (13. a4 {Is a move that computer really likes, simply nipping the
b5 idea in the bud.}) 13... Nf8 ({The reason why engine doesn't like the
previous move is this preliminary exchange:} 13... Bxh6 14. Qxh6 Kh8 {[%cal
Gf6g8,Gd7f8] And now the king has prepared the move Ng8 if required, say after}
15. h5 Ng8 16. Qd2 Rb8 {And even though White has the advantage, it is not yet
clear how the attack is going to continue and Black has more counterplay than
in the game! Of course, this is purely computer defence which is incredibly
difficult to see even in 2022, let alone in 1957.}) 14. h5 {Now we again have
a one-way street as Black has no counterplay.} Qc7 {[%cal Gc5c4,Gb7b5]
Intending to play b5 and then c4 before recapturing on b5.} 15. Bd3 {Correctly
judging that White shouldn't really fear the b5 advance.} (15. a4 {Was also
possible, preventing the counterplay in the bud. However, since White is
intending to castle queenside, it is probably not necessary to weaken the
queenside further and provide Black with a hook on a4 they can use to play b5
in the future.}) 15... b5 {Finally, but this now comes a bit late in the day.}
16. O-O-O {Ignoring the demonstration on the kingside seems like the best
approach. There are some other possibilities like sacking the knight on f5 at
once, but this move seems very human and logical.} (16. cxb5 {would give Black
some play after} c4 17. Be2 ({or} 17. Bc2 axb5 18. Bxg7 Kxg7 19. Nxb5 Qb6 20.
a4 Kh8) 17... Bxh6 18. Qxh6 axb5 19. Nxb5 Qb6 {[%cal Rb6b2]} 20. a4 Bd7 {
Although even here White retains the superiority with the thematic tactical
shot} 21. Nf5 {Threatening mate on g7 and forcing} Bxf5 22. gxf5 {when White
is firmly in the driver's seat. This Nf5 idea is very thematic in this
position so it is definitely something worth noting.}) 16... bxc4 {Black opens
the b-file, at least - but it turns out there is little they can do along it
as White has many pieces defending the king and the bishop on g7 is not
participating in the attack.} 17. Bb1 (17. Bc2 {Seems more precise, but I
guess Tal wanted to keep the 2nd rank clear in case some lateral defence of
the b2 pawn is required.}) (17. Bxg7 {Btw, it also seems it was better to
include the preliminary exchange on g7 in order to avoid having the queen
dragged to h6 and avoid that whole Kh8 business.} Kxg7 18. Bb1 {and now if
Black tries} Kh8 19. g5 {is very strong, as the queen is not getting trapped
on h6.}) 17... Bh8 {This is just bad, although very understandable. Tolush
tries to keep the bishop that covers the dark-squares, but it loses some more
time.} (17... Bxh6 18. Qxh6 Kh8 {was once again most resilient. The point is
that now} 19. g5 (19. Qd2 {is what White should play instead, when g5 is
coming and White is nevertheless in the driver's seat, but Black has gained a
few tempi compared to the game.}) 19... Ng8 {Traps the queen.}) 18. Rdg1 {
[%cal Rg1g8,Gg3f5] Now all pieces are participating in the attack and
sacrifice on f5 is in the air.} Rb8 {[%cal Gd2b2] This is why Tal put the
bishop on b1 - the b2 pawn is protected by the queen.} 19. Nf5 {Here we go.
This thematic pseudosacrifice is very tough for Black as the knight is
untouchable on this square.} (19. g5 {The prosaic advance of the g-pawn was
also very strong as after} N6d7 20. Nf5 {Comes under arguably even stronger
circumstances. At first glance it is hard to understand why given that now
after} gxf5 {The g-file is closed. But it transpires that the sinple recapture
on f5 is good enough - but also that there is} 21. g6 hxg6 22. hxg6 fxg6 23.
exf5 {With total destruction of Black's kingside. Black can't survive this
position.}) 19... N6d7 {It is hard to suggest a move for Black, but this
undeveloping of the knight is surely not the most resillient attempt.} (19...
gxf5 {The knight, of course, can't be taken due to} 20. gxf5+) (19... Rb7 {
or some other similar waiting move, might be a bit more resistant, although
Black's position is very much lost all the same.}) 20. Bg5 {[%cal Rf5h6,Rh6f7]
Preparing some Nh6-Nxf7 ideas.} (20. hxg6 {The prosaic opening of the h-file
was also sufficient - and arguably even simpler, as after} fxg6 21. Bxf8 Nxf8
22. Nh6+ Kg7 23. f4 {Black is helpless against the opening of the kingside, e.
g.} exf4 24. Qxf4 Qe7 25. Rf1 Rb7 26. g5 {And Qf6 and Qf7 threats are
impossible to deal with.}) 20... Bg7 {Black tries to deal with the threat of
Nh6 but ends up giving the bishop away.} (20... Qb6 {Black could have also
ignored the threat, but after} 21. hxg6 fxg6 22. Nh6+ Kg7 23. f4 {Comes with a
great effect once again - just like in the previous variation} exf4 {And here
there are several wins, the most brutal of them being} 24. Qxf4 Qxb2+ 25. Kd1)
21. Nxg7 Kxg7 22. Bh6+ Kg8 {Now Black's dark squares are very much weakened,
although the position is much more resillient than it looks like at the first
glance.} 23. f4 {Now with the knight gone from h6, this move seems to be not
as powerful as in the previous variations, although White still keeps a big
chunk of the advantage.} (23. Rh2 {Some patient move like Rh2, overprotecting
b2 and maybe intending to double on the h-file, was probably better. White has
all the time in the world to improve the pieces.}) (23. Bc2 {[%cal Gc2a4] With
the idea of playing Ba4 and exchanging the passive bishop for one of the
defenders of the king, was also an interesting idea worth examining.}) 23...
exf4 24. Qxf4 Qd8 {[%cal Gd8f6] Now Black is kinda covering some dark-squares
and his position does have some degree of the resillience, although White is
objectively completely winning.} 25. hxg6 {Opening the h-file seems very
sensible.} (25. Qxd6 {Is exactly what Black was hoping for, as then there are
some crazy defensive ideas such as} g5 {[%cal Gb8b6] With the idea of Rb6.} (
25... Rb6 26. Qf4 (26. Qg3 g5 27. Bxf8 Kxf8 {And Black is actually the one to
be preferred due to the control of the dark-squares, all of a sudden.}) 26...
Ne5 {Is also not as clear cut as Black now has some nice dark-squares to work
with.})) (25. Bg5 f6 26. hxg6 {Was also possible, weakening the king even
further and profiting from the fact that the bishop on g5 is immune due to}
fxg5 27. Qf7+) 25... Nxg6 (25... fxg6 26. Qxd6 {Is now much stronger for White
as the h- and f-files are opened, so after} Rb6 27. Qg3 g5 (27... Ne5 28. Bf4
Qc7 29. g5 {Is also very strong for White. Yes, the knight on e5 is great, but
we have the open h-file and a strong dark-squared bishop of our own.}) 28. Bxf8
Kxf8 {Now doesn't work due to numerous reasons - but mostly because of the
open f-file} 29. Rf1+ Kg8 30. e5 {[%cal Rb1h7,Rh1h7] And now the weakness of
the h7 is terminal. This is the difference compared to the previous line.}) 26.
Qh2 {[%cal Rh1h8] Lining up on the h-file. Despite all the inaccuracies, the
position is still winning for White - which goes on to show how bad Black's
position was to begin with.} (26. Qxd6 Nge5 {Is once again very unclear and
better to be avoided.}) 26... Nde5 {It is logical to bring the knight to e5
and open up the bishop, although there are other options as well.} 27. Bf4 {
But this is a very strange decision, giving up the dark-squared bishop.} (27.
Bd2 {Seemed like the best move - discovering an attack on h7 and not giving up
the strong bishop.}) 27... Nf8 (27... Nxf4 {It was possible to take the bishop
on f4 and then after} 28. Qxf4 Qe7 {Hope to establish some sort of a defense
on the dark-squares with Ng6 and Qe5 next. It does look scary for a human, but
the engine insists it is not at all so easy for White to demonstrate a way
toward a clear advantage.}) (27... Qf6 {Was also more resillient, intending to
return the pawn on h7 as after} 28. Qxh7+ Kf8 {Black has a very nice control
over the dark-squares, the bishop is under the attack, g4 pawn is hanging and
the king will escape to e7 where it will be very safe. White does have some
advantage, but it is much less clear compared to what happened in the game.})
28. Qh6 {[%cal Gf4g5] Now White will get in Bg5 and maintain the pressure on
the dark-squares.} Neg6 {A final mistake in an objectively difficult position.}
(28... Rb7 {Or something along those lines - not moving the knight from e5 and
trying to add some more protection along the 7th rank, was more resillient,
although White is still very much winning.}) 29. Bg5 f6 30. e5 {[%cal Rb1h7,
Gc3e4] A brilliant breakthrough at the most fortified point. White throws in a
pawn, but opens up the bishop on b1 as well as the square on e4 for the knight.
} Rxe5 (30... fxg5 31. Bxg6 Nxg6 32. Qxh7+ {Leads to a very quick mate.}) 31.
Bxg6 Rb7 {[%cal Gb7h7] Trying to add some protection along the 7th rank, but
now this comes in too late.} (31... Nxg6 32. Qxh7+ Kf8 33. Qxg6 {Once again
leads to a mate very very soon.}) 32. Ne4 {[%cal Re4f6] Bringing the last
piece that is not participating in the attack into the game ("Bring all the
boys to the party") and not really caring about the fact that the bishop on g5
is hanging.} fxg5 (32... Rxg5 {Is also losing after the prosaic} 33. Bf5 {
[%cal Re4f6,Rh6f6] When the pawn on f6 can't be defended.} Rf7 34. Bxc8 Qxc8
35. Nxf6+ $18) 33. Rf1 {[%cal Ge4f6,Gf1f8] A brilliant quiet move, threatening
the capture on f8 and check on f6, among other things.} Rxe4 (33... Nxg6 34.
Nf6+ {Wins on the spot for White e.g.} Kh8 35. Qxh7+ Rxh7 36. Rxh7#) 34. Bxe4 {
Now it is all over as White is up an exchange and still has a raging attack
going on.} Rg7 35. Rf6 Bxg4 36. Rhf1 {A prosaic and "boring" way of ending up
the game - but more than good enough.} (36. Bxh7+ {Was leading to a quick mate
after} Nxh7 (36... Rxh7 37. Rxf8+ Qxf8 38. Qxh7#) 37. Rg6 Rxg6 38. Qxg6+) 36...
Nd7 37. Rxd6 Qe7 38. Rxa6 {[%cal Ga6a8] Simply collecting all the pawns and
threatening Ra8.} Kh8 39. Bxh7 {[%cal Ga6a8] A flashy finish, exploiting the
weakness of the back rank.} Nb8 (39... Rxh7 40. Ra8+ {Leads to a quick mate.})
40. Bf5+ Kg8 41. Be6+ Bxe6 42. Rxe6 {And here Tolush finally decided to throw
in the towel. Perhaps not the most beautiful game by Mikhail Tal, but the one
I felt is a good introduction to his style and to some of the later
brilliancies we will see in this article. --- Furthermore, I find these older
games very instructive mainly because quite often, one side (in this case
Tolush) completely misplays the opening and gets in a lost position early on -
which is something that happens very often at the club level. Seeing a player
of Tal caliber handling such a position - and also misplaying it at certain
moments - can be regarded as more instructive and relatable than, say, recent
encounters at the very top level.} 1-0

[Event "Riga ;MAINB"]
[Site "Riga ;MAINB"]
[Date "1957.??.??"]
[Round "?"]
[White "Mikhail Tal"]
[Black "Alexander Koblents"]
[Result "1-0"]
[ECO "B63"]
[Annotator "USER"]
[PlyCount "77"]
[EventDate "1957.??.??"]

{Let's continue our journey through the magical world of Tal's games by
examining his game against Latvian Master Alexander Koblents - who was
incidentally Tal's coach since 1949 and very notably - his second in the 1960
and 1961 World Championship matches against Botvinnik.} 1. e4 {In this game,
Tal opened with his favourite move.} c5 {The Sicilian, leading to a sharp
battle, was always a risky opening choice against a player as tactically
gifted as Tal, but I guess Koblents had his reasons for choosing it.} 2. Nf3 d6
3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Nc6 {The Classical Sicilian has been
overshadowed by Najdorf, Sveshnikov and some other Sicilians in the recent
years, but it remains a very respectable opening to this day. Back in the day
it was very popular - among other players, Mikhail Botvinnik used to play it
on a regular basis at some point in his career.} 6. Bg5 {The Richter Rauzer
attack is the critical way of handling the Classical Sicilian even today.} e6
7. Qd2 Be7 {The old mainline, opting for quick kingside castling.} (7... a6 {
Is the main move today, postponing kingside development in favour of rapid
queenside development.}) 8. O-O-O O-O 9. Nb3 {This move avoids the typical
exchange of the knights on d4. It is a very respectable and viable option,
although less popular and arguably critical than the immedaite advance of the
pawns on the kingside.} (9. f4 {Is what consitutes the mainline nowadays.}) (9.
h4 {Also has the right to exist!}) 9... Qb6 {This is the most popular move in
the position. The idea is to indirectly defend the d6 pawn and vacate the d8
square for the rook while avoiding any Nb5 ideas. Still, it is probably not to
good, objectively speaking as the queen is put in front of the queenside pawns
- and Black will very much want to attack on that side of the board.} (9... h6
{Is the immediate suggestion by the computer. The point is that Black can
calmly give up the pawn on d6:} 10. Bxf6 Bxf6 11. Qxd6 Bxc3 12. bxc3 Qf6 {
With more than ample compensation for the pawn. This is a relatively rare and
unexplored continuation that deserves some more attention, for sure.}) 10. f3 {
[%cal Gf3e4] Removing the pawn from the attack and preparing the kingside play
with g4-h4 and so on. Not the only way of handling the position, but
definitely a very logical one.} ({The idea behind Black's play is revealed
after} 10. Bxf6 Bxf6 11. Qxd6 Qxf2 {White can't really capture on d6 as it
loses the f2 pawn and lands them in a lost position as the bishop pair and
Black's dark-square control are too strong.}) 10... a6 {Black also prepares
the queenside expansion slowly but surely.} (10... Rd8 {Defending the d6 pawn
was also possible, but not necessary.}) 11. g4 {A very logical way of going
for the attack, but maybe this is not the most precise way.} (11. Bxf6 Bxf6 12.
Qxd6 {Now doesn't lose a pawn, but still provides Black with a ton of
compensation after} Rd8 (12... Bxc3 {is also quite reasonable.}) 13. Qg3 Qe3+ {
As a matter of fact - Black regains the pawn at once and after} 14. Kb1 Bxc3
15. Rxd8+ Nxd8 16. bxc3 Qxc3 {is at least equal in this position.}) (11. h4 {
Seems to be a better way - pushing the pawn to h6 is the priority here. Say,
if Black continues with} Qc7 {then the pawn on d6 is exposed:} (11... Rd8 {
is achievement for White as after} 12. Be3 Qc7 13. Qf2 {Bb6 is threatend, the
queen sidestepps trouble on the d-file and g4-g5 is coming. White has better
chances here.}) 12. Bxf6 Bxf6 13. Qxd6 {And now the counterplay is missing and
it is more difficult for Black to prove the compensation for the pawn.}) 11...
Rd8 {This move is not necessary!} (11... Qc7 {Was possible. With the pawn on
g4 instead of the pawn on h4} 12. Bxf6 Bxf6 13. Qxd6 {Is not as good as after}
Qxd6 14. Rxd6 Be7 15. Rd1 {Black manages to play the shocking move} g5 {
[%csl Gg5][%cal Gg5f4,Gc6e5] Securing the dark-squares and the e5 square for
the knight. This is, of course, pointed by the computer, but it is amazing to
me how deeply the engines understand chess strategy these days - this line is
perfectly understandable from a human viewpoint!}) 12. Be3 {Now the bishop has
done its job on g5 and there is no point in keeping it there, so Tal retreats
it with the gain of tempo and clears the way for the kingside expansion.} Qc7
13. h4 {But this is a blunder that allows the immediate counterplay in the
center.} (13. Qf2 {It was necessary to remove the queen from the d-file,
threaten Bb6 and only after} Nd7 {push the pawns with} 14. h4 {When White has
better prospects in the upcoming fight with the opposite-side castling.}) 13...
b5 {This is a mistake that allows White's attack to gain the momentum.} (13...
d5 {Black could have executed the thematic Sicilian blow, exploiting the
position of the rook on d8. The line could continue} 14. Qf2 dxe4 15. Rxd8+
Qxd8 16. g5 Nd5 {And Black has no problems, as the crisis in the center
diverts White from executing the attack on the kingside.}) 14. g5 {Now the
knight gets chased away and three is no d5 break any more.} Nd7 15. g6 {
A very interesting, although not necessary pawn sacrifice, typical of the
Sicilian. The idea is to play h5 next and open the lines on the kingside.} (15.
h5 {Continuing the attack with the push of the h-pawn,}) (15. Qf2 {Or moving
the queen and calmly improving the pieces, were both possible, although Tal's
choice is definitely more enterprising and thematic.}) 15... hxg6 {But this
logical move is already a decisive mistake, as it opens up the h-file
completely.} (15... fxg6 {For better or for worse, taking with the f-pawn
should have been preferred. Usually, it is not positionally desirable to
capture "Towards the center", but in this particular case, Black simply
doesn't want to open up the h-file. Play might continue} 16. h5 gxh5 17. Rxh5
Nf6 18. Rh1 d5 {And here there is no direct attack along the h-file, so Black
is much safer than in the game.}) 16. h5 gxh5 17. Rxh5 Nf6 18. Rh1 d5 {Now the
same variation but with the pawn on f7 instead of h7 is losing for Black due
to the open h-file.} 19. e5 {A good reply, closing the action along the d-file
and preparing to reposition the bishop on f4 and the queen on h2.} (19. Bf4 {
The immediate transfer of the bishop is pointed out by the engine as even
stronger, but only due to some inhuman lines, such as} Bd6 (19... e5 {also
leads to a fascinating line.} 20. Qh2 Kf8 21. Qh8+ Ng8 22. Rg1 Bf6 23. Bh6 {
And White manages to break through. Not easy sequence to see, even for the
great Mikhail Tal.}) 20. Bxd6 Qxd6 21. f4 {When e5 is threatened and Black
can't take on e4 due to the pin on the d-file.}) 19... Nxe5 20. Bf4 $2 {
But this is actually a significant mistake that allows Black to consolidate by
moving the bishop from e7 to d6.} (20. Qh2 {Was necessary as now mate in 1 is
threatened so Black doesn't have time to move the bishop from e7. Thus after}
Kf8 21. Qh8+ Ng8 {Black's pieces are not as coordinated and White can exploit
it with the super precise} 22. Bd4 {Threatening f4.} Bf6 23. Bc5+ Be7 24. Rh7 {
When g7 will fall and the position is completely won after} Bxc5 25. Qxg7+ Ke7
26. Nxc5 {As the e5 knight is exposed and the king is in the center of the
board. Some chess still remains to be played, though, but this is definitely
much better for White compared to the game.}) 20... Bd6 {Now the king gains
the e7 square and Black's bishop is more active on d6.} 21. Qh2 {Now this
infiltration comes a move too late.} Kf8 (21... Ng6 {Was even stronger, when
White doesn't have anything better than} 22. Bxd6 Qxd6 {When there is no
attack and Black has two extra pawns. White does have some practical
combination, but it should be objectively lost.}) 22. Qh8+ {Going from bad to
worse - but this might be the best practical chance.} (22. Kb1 {Is the
computer move, but you know you are sad if you have to suddenly switch to
making such defensive moves in a position where you were attacking.}) 22... Ng8
$2 {As usual in Tal games, it is very difficult for the opponent to withstand
the pressure and Koblents goes very wrong here, allowing Tal to seize the
initiative once again.} (22... Ke7 {Would have been the logical continuation
now that the e7 square is available. Koblents was potentially worried about
leaving the g7 hanging, but after} 23. Qxg7 Rg8 {The queen is simply trapped.
Maybe Koblents didn't want to beat his student? A bit shocking, to be honest,
that he didn't play this simple and obvious move.}) 23. Rh7 {[%cal Rh7g7,Rh8g7]
Now White is fully back in the game and concrete threats start to appear.} f5 {
The only way to defend the h7 pawn and the best move in the position, although
at first, I didn't fully understand why it is better to have the pawn on f5 as
opposed to f6. However, it transpires that it is important to control the g4
square - precisely because of one specific line!} ({After} 23... f6 24. Bh6 Rd7
{It transpires that there is this strong move} 25. Nd4 {Threatening Nxe6.} Rf7
26. Bxb5 gxh6 27. Rg1 {And in this position there is no Ng4 as the pawn is on
f6 and not on f5, so Whiteis clearly better after some crazy line} Ng4 28. Rxg4
Bf4+ 29. Kb1 Bg5 30. Rxh6) 24. Bh6 Rd7 25. Bxb5 {[%cal Gd1g1] Adding some more
fuel to the fire and creating a typical Tal chaos. The idea of this move is
not so much to recapture on b5 as to clear the 1st rank for the d1 rook to
join the attack.} (25. Nd4 {Now doesn't work as after} Rf7 26. Bxb5 gxh6 27.
Rg1 Ng4 {wins for Black. This is why it was better to push the pawn to f5
instead of f6.}) 25... Rf7 $2 {And immediately, Koblents commits a fatal
mistake.} (25... axb5 {First of all, taking on b5 is not good as it - just
like the text move - gives White time to play} 26. Rg1 {[%cal Rg1g8,Rh6f8,
Rh7g7,Rh8g7] Increasing the pressure on the g7 pawn.} Ng4 {The only defence.}
27. Nxb5 {[%cal Rb5d6,Rb5c7] Getting ready to eliminate the bishop on d6.} Bf4+
28. Kb1 Qe5 29. Bxf4 Qxf4 30. fxg4 {And White retains material equality and
has a raging attack.}) (25... Ng6 {[%cal Rg6h8] Attacking the queen in the
corner, was the only move. Play continues} 26. Nd4 {Literally the only move to
stay in the game, creating a counter threat of Nxe6.} Re7 {Defending the e6
pawn.} (26... Nxh8 27. Nxe6+ Kf7 28. Nxc7 {Turns out to be better for White
after some crazy complications} Rxc7 29. Rxg7+ Kf8 30. Rxc7+ Nxh6 31. Bc6 {
and when the dust has settled - White has slightly better chances in the
incoming imbalanced endgame. Crazy and beautiful how even the most complicated
lines can end up in some imbalanced, but technical endgames.}) 27. Bxg7+ {
Absolutely the only move - but one has to see the following point.} Rxg7 28.
Bd7 {Marvelous interference! White creates the threats of Nxe6 and Qxg7 and it
is very difficult to deal with both!} Qxd7 {Absolutely the only move!} (28...
Bxd7 29. Qxg7+ {Loses on the spot.}) (28... Nxh8 {also loses by force:} 29.
Nxe6+ Ke7 30. Rxg7+ Nf7 31. Nxd5+ Kxd7 32. Nexc7) 29. Nxe6+ {Diverting the
queen or the king from the defence of the rook on g7.} Qxe6 30. Qxg7+ Ke8 31.
Nxd5 {And the engine claims this position is equal, although it most certainly
wont end in equality in a human game.}) 26. Rg1 {[%cal Rg1g8] The attack on g7
reaches its peak and Black is helpless aginst the incoming onslaught.} Ra7 27.
Nd4 {[%cal Rd4f5,Rc3d5] Bringing the knight closer to the action and
increasing the pressure. Now the threat is Nxf5 and Nxd5, among others.} (27.
Bxa6 {Is pointed out by the computer as strong. I guess the point is that after
} Bxa6 28. Nd4 {e6 is under threat and after} Bc8 29. Ncb5 {White wins the
exchange back but - more importantly - eliminates one of the defenders of the
g7 point.}) 27... Ng4 {Trying to block the g-file desperately.} (27... axb5 28.
Ncxb5 {Once again wins, as in the previous note.}) 28. fxg4 Be5 $2 {The final
mistake!} (28... Bf4+ {Would have offered some chances to resist after} 29. Kb1
Bxh6 30. g5 Bxg5 31. Rxg5 {When White has an extra piece, but Black has two
pawns. This was definitely much better for Black than what happened in the
game.}) 29. Nc6 $6 {[%cal Rc6a7,Rc6e5] Sufficient, but not the most precise.} (
29. Nf3 {Was much stronger. The point is to have some crazy Nh4 idea in the
case of} axb5 30. Nh4 {[%cal Rh4g6] and apparently this is winning for White.
Crazy how much tactics the computers see in a position like this and how often
paradoxical ideas are the best.}) 29... Bxc3 $2 {Capitulation!} (29... axb5 {
Was the only way to stay in the game. White's problem is now that capturng on
b5 is not possible and also that} 30. Nxa7 Qxa7 {[%cal Ge5g7] Doesn't work as
the bishop on e5 is defending the g7 pawn.}) 30. Be3 {[%cal Re3a7,Rh8g8] A
deadly bishop retreat, clearing the h-file and creating a nasty threat of Rh1
and Qxg8.} ({The more prosaic recapture on c3 with} 30. bxc3 {was also
sufficient as after} axb5 31. gxf5 {The pressure on g7 is too much for Black
to handle:} Qxc6 32. Rgxg7) 30... d4 {Nothing else really works. This actually
forces White to find the only winning way!} 31. Rgh1 {[%cal Gh8g8] With the
nasty threat of Qxg8 and Rh8 mate.} Rd7 {Clearing the f7 square for the king!}
32. Bg5 $2 {Amazingly, this turns out to be a mistake that allows Black to
escape!} (32. gxf5 {Seems to be the only winning move. The idea is to take on
e6 next and prevent the king from escaping once again, while also trying to
open the a2-g8 diagonal.} dxe3 (32... exf5 {Also loses to} 33. Qxg8+ Kxg8 34.
Bc4+ {[%cal Rc4g8]}) 33. fxe6 {Now the deadly threat of Qxg8 is still there
and Black is just lost.}) 32... axb5 33. R1h6 {The culmination of this entire
fascinating game!} d3 $2 {The final mistake, allowing a devastating attacking
finish.} (33... Qxc6 {Black had two ways of staying in the game. The first was
the "simple" recapture of the knight.White has nothing better than} 34. Rf6+
gxf6 35. Bh6+ Rg7 36. Bxg7+ Ke7 {When there is no immediate mate and White
doesn't have more than a dynamic equality!}) (33... Bxb2+ {Was also possible,
with very similar ideas after} 34. Kxb2 (34. Kb1 Qxc6 {is similar.}) 34... Qxc6
35. Rf6+ gxf6 36. Bh6+ Rg7 37. Bxg7+ Ke7 {when the engine gives the eternal "0.
00" evaluation.}) 34. bxc3 {I guess this recapture escaped Koblents' attention.
White eliminates the defender of the g7 pawn and now intends to win with the
Rf6 checking mechanism.} d2+ 35. Kd1 Qxc6 36. Rf6+ Rf7 (36... gxf6 37. Bh6+ {
Wins this time, as after} Rg7 38. Bxg7+ Ke7 {there is} 39. Bxf6+ Kd6 40. Be5+ {
This check wasn't possible with the bishop on c3, but now the rook on a7 will
eventually drop and White will obtain a decisive material advantage.}) 37.
Qxg7+ {And here Koblents decided to resign due to} Ke8 38. Qxg8+ Kd7 39. Rhxf7+
{And Black is getting mated shortly. A fascinating, mind-boggling and typical
Tal encounter, where he very successfully took his opponent into the "deep
dark forest" and outwitted him in a sharp tactical melee. Games like these
probably contributed to Botvinnik calling Tal's style "gambling", but even
with the modern engines it is necessary to dive really deep to understand all
the intricacies and nuances of different tactical lines. --- I can only
imagine how difficult it was to face this style over the board - especially in
the Botvinnik-Smyslov time where logic, harmony and positional player trumped
this sacrificial, combinational style.} 1-0

[Event "WchT U26 fin-A 05th"]
[Site "Varna BUL"]
[Date "1958.07.??"]
[Round "2"]
[White "Milko Bobotsov"]
[Black "Mikhail Tal"]
[Result "0-1"]
[ECO "E81"]
[Annotator "USER"]
[PlyCount "60"]
[EventDate "1958.??.??"]

{In the next game, we are going to see another very famous Tal game, played
against Milko Bobotsov in Varna in 1958. Apparently, this was played during
the "World Team Chess Under-26 final". Talking about a strange chess
tournament that could only exist in the past. --- Anyway, let's dive into the
game.} 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 {The King's Indian was not a surpising
opening choice for Tal with the Black pieces, given its sharp,
counterattacking nature.} 4. e4 d6 5. f3 {This time, Tal has to face the
Saemisch variation, which we have already seen in his game against Tolush
analyzed previously.} O-O {Deviating from the immediate push of the e-pawn
which was Tolush's choice.} 6. Nge2 {One of the possible setups for White in
this variation that is still very relevant today.} c5 {Another typical
undermining move in the King's Indian, inviting the transposition into a
Benoni structure.} 7. Be3 {Reinforcing the d4 pawn and maintaining the tension
is very playable.} (7. d5 e6 {Would lead to a Benoni structure. This was also
played many times - and in some very high profile games, too.}) 7... Nbd7 {
But this move is a little bit passive as the knight turns out to be misplaced
on the d7 square. Still, it was played by Korobov, Mamedov and Carlsen, so it
can't be that bad.} (7... Nc6 8. d5 Ne5 {is by far the main line of this
position, seen many times. But then again, we shouldn't judge a game played in
1958 too harshly from the opening viewpoint.}) 8. Qd2 a6 {[%cal Gb7b5] Going
for the typical counterplay involving b5.} 9. O-O-O {A brave, but somewhat
risky decision.} (9. Rd1 {Trying to control the center and preventing the
liberating b5 push was more prudent.}) (9. dxc5 dxc5 10. Rd1 {Opening the
d-file nad bringing the rook there was also more sensible. It seems that in
these cases Black's counterplay is quite limited.}) 9... Qa5 {Now Black does
get a lot of activity on the queenside.} 10. Kb1 b5 11. Nd5 $2 {Bobotsov must
have been counting on this thematic tactical shot, exploiting the position of
the queen on a5 - but he is in for a nasty surprise.} (11. Nc1 {Playing in a
calmer fashion and allowing the exchange on c4 was more prudent, although after
} bxc4 12. Bxc4 Qc7 {White doesn't have the usual stability in the center and
might start regretting the decision to castle long. Still, with best play the
situation is far from clear.}) (11. dxc5 {Taking on c5 and trying to open the
d-file and alleviate some of the pressure on the kingside was also playable.
After} dxc5 (11... Nxc5 12. Bxc5 dxc5 13. Nd5 {Is clearly better for White.})
12. h4 h5 13. Nf4 {A complicated battle is ahead of us.}) 11... Nxd5 $1 {
Very creative, enterprising and - most importantly - fully correct. Tal
sacrifices the queen, but in return he will get two pieces and eliminate the
opponent's dark-squared bishop. Even the materialistic engine approves of this
decision.} 12. Qxa5 {There is no way back now.} Nxe3 13. Rc1 Nxc4 {It is
interesting to note that this whole variation has been repeated in quite a few
games since this game was first played, with mixed result. But objectively,
Black should have more than sufficient compensation for the queen due to the
harmonious pawn structure and powerful dark-squared bishop.} 14. Rxc4 {This is
probably not the best, but White is trying to eliminate the pesky knight and
create some targets in the opponent's pawn structure.} (14. Qc3 {If White
moves the queen and tries to defend the d4 pawn, than Black has several good
options, out of which the most energetic seems to be} d5 {with the idea of} 15.
exd5 Ndb6 {And Nxd5 next, with a fabulous position.}) (14. Qe1 cxd4 15. Nf4 {
IS the engine proposal, just givin up a pawn and hoping to activate some
pieces, but this is not the easiest line for a human.}) 14... bxc4 15. Nc1 (15.
Nf4 {Was more active.}) 15... Rb8 {[%cal Rb8b2,Rg7b2] The rook starts eyeing
the b2 pawn. Black not only has compensation for the missing material - at
this point Black is completely winning due to the quality of his pieces and
the harmony of his position. White has more targets and the dark-squared
bishop is absolutely powerful.} 16. Bxc4 Nb6 17. Bb3 Bxd4 {[%cal Rd4b2,Gc5c4]
Now ideas like Bxb2 or c4 are on the agenda.} 18. Qd2 $2 {The losing mistake.}
(18. Ne2 {seems to be the only move, as after} Bxb2 19. Kc2 Bf6 20. Rb1 {
White at least manages to activate all pieces and create a threat of Bxf7.
Still, Black's position is preferable after} e6 {Although a lot of chess
remains to be played. Needless to say, this is not very human.}) 18... Bg7 {
[%cal Gc5c4] Removing the bishop from the attack and preparing the inevitable
c4 advance.} 19. Ne2 {Now this comes way too late.} c4 20. Bc2 c3 {[%cal Gb6c4]
The combined power of the bishop on g7 and the rook on b8 are too much for
White to handle. Nc4 is also coming and White is busted already.} 21. Qd3 (21.
Nxc3 Nc4 {Is dead lost.}) 21... cxb2 {Now the pawn on b2 is a tremendous asset,
as well. The game is virtually over at this point.} 22. Nd4 Bd7 23. Rd1 Rfc8 {
Calmly finishing the development, bringing the last piece into the game and
preparing Nc4.} 24. Bb3 Na4 {[%cal Ga4c3] Threatening the deadly Nc3 jump.} 25.
Bxa4 Bxa4 26. Nb3 Rc3 {It is hard to offer White any advice or improve the
play. Bobotsov could have easily resigned here.} 27. Qxa6 Bxb3 28. axb3 Rbc8
29. Qa3 Rc1+ 30. Rxc1 Rxc1+ {And one move before mate, Bobotsov finally
resigned. A tremendous game by Tal, featuring a fully correct queen sacrifice,
that I imagine was very revolutionary, novel for the time. Even today, when
going through this game, one is left with a very satisfactory artistic/
aesthetic impression!} 0-1

[Event "Bled-Zagreb-Belgrade Candidates"]
[Site "Bled, Zagreb & Belgrade YUG"]
[Date "1959.09.18"]
[Round "8"]
[White "Mikhail Tal"]
[Black "Vasily Smyslov"]
[Result "1-0"]
[ECO "B10"]
[Annotator "USER"]
[PlyCount "51"]
[EventDate "1959.09.07"]

{After seeing a couple of games from Tal's youth of relatively (and I want to
emphasize the word relatively) lower competetive importance, in this encounter,
we will completely change the script and examine a very famous and celebrated
game Tal played against the formidable Vasily Smyslov in the 1959 Candidates
Tournament. --- You have to remember that in the 1950s, Smyslov was very much
in his prime, playing three matches against Botvinnik (1954, 1957 and 1958)
for the World Championship title and winning one of them. And even though he
didn't start very well in the 1959 Candidates Tournament, he was very much
considered to be a favourite in such a long marathon (28 rounds) and had
already defeated Tal in their first game. --- Thus, Tal - who didn't have a
brilliant start to the tournament either - was very much seeking his revenge
and trying to prove that his swashbuckling style can not only work against
"lesser" masters, but also against the world's very best. --- Let's take a
look at this historical encounter that also had enormous competetive
significance.} 1. e4 {Of course, no 1.d4 or 1.c4 shennanigans this time.} c6 {
Smyslov is known for his contributions to the Ruy Lopez - an opening he used
to play a lot with both colours. However, 1...e5 was not his only reply
against the king's pawn opening as throughout his career he also regularly
employed both the Sicilian and Caro-Kann. He already played 1...c6 in the
previous round of the tournament against Fischer, so it surely didn't come as
a major surprise to Tal.} 2. d3 {A peculiar opening choice. This line is
relatively innocuous, but Tal (and Koblents) probably had his (their)
reasoning behind this choice.} d5 3. Nd2 (3. Nf3 {is all the rage these days,
but it was a bit too extravagant for 1959.}) 3... e5 {A very principled reply
against this King's Indian Attack setup by White (it is precisely this move
White tries to avoid by playing 3.Nf3 first).} 4. Ngf3 Nd7 $6 {But this is a
serious inaccuraccy, that kinda demonstrates the level of opening play at the
time. Black allows White to open up the center under favourable circumstances.}
(4... Bd6 {is the main move here. The point is that after} 5. d4 exd4 6. exd5 {
the knight on b8 has the possibility to recapture on c6 and also the bishop on
c8 is not blocked, so Black can play numerous reasonable moves, the most
precise probably being} Nf6) 5. d4 dxe4 (5... exd4 6. exd5 {[%cal Rc8h3] now
works in White's favour due to the poor positioning of the knight on d7 that
is not defending the pawn on c6 and also blocking in the bishop on c8.}) 6.
Nxe4 exd4 7. Qxd4 {It is true that White has losta tempo in moving the d-pawn
twice in the opening and that now all the central pawns have been exchanged,
but now White has a nice lead in development. Furthermore, since Black played
c6, the d6 square has been weakened and it is actually not super easy for
Black to deal with this.} Ngf6 {A natural developing move can't be too bad.} (
7... Nc5 {Trying to resolve the central tension immediately is not too good as
after} 8. Qxd8+ Kxd8 {White has numerous good possibilities, the simplest of
which seems to be} 9. Nxc5 Bxc5 10. Bf4 {When castling long is coming next,
then also Ng5 is on the table and White has a nice lead in the development.})
8. Bg5 {Continuing the development and preparing castling long, while
increasing the pressure on the knight on f6.} (8. Nd6+ {White could have also
jumped with the knight immediately, but moving the bishop first is definitely
playable, as long as it is followed up by the knight jump to d6.}) 8... Be7 9.
O-O-O $6 {But here this is a bit imprecise as it allows Black to castle
without any issues.} (9. Nd6+ {Jumping with the knight seemed very simple and
positional - forcing Black to give up the dark-squared bishop. After} Bxd6 10.
Qxd6 {It is difficult for Black to castle and the endgame after} Ne4 11. Bxd8
Nxd6 12. Bc7 {Is quite miserable as White has the bishop pair and slight lead
in development.}) 9... O-O 10. Nd6 {Now this knight jump doesn't come with the
same effect as Black is not forced to capture it.} Qa5 {This is a bit
overzealous on Smyslov's part. However, this does change the character of play
and invites tactical complications where the value of each move is
significantly increased.} (10... h6 {Forcing the bishop on g5 to declare its
intentions and then moving the d7 knight was a healthier way toward equality.}
11. Bh4 Nb6 {[%cal Gc8e6,Gb6d5] While Nbd5 is also an idea.}) 11. Bc4 {[%csl
Ga2][%cal Rc4f7,Rd6f7,Gc4a2] The bishop is very active on this diagonal,
placing pressure on f7 and also defending the a2 pawn.} b5 {Very provocative!
Black is inviting White to capture on f7, claiming that this exchange is not
at all so unfavourable for him.} (11... Nb6 {Was the alternative way of
playing, however after something along the lines of} 12. Bb3 Nbd5 13. Nxc8
Raxc8 {White has a clear advantage due to the bishop pair and the active
pieces in the center.}) 12. Bd2 {A very typical Tal move and a very surprising
counter. The idea is to eventually reposition the bishop to c3 and aim at the
black king.} (12. Bxf7+ {Capturing on f7 is suggested by the engine. At first
glance, it seems as if it is initiating an unfavorable exchange for White that
we are already taught as beginners to avoid, but it transpires that situation
is not at all so simple due to Black's lack in development and poor piece
coordination. The line continues} Rxf7 13. Nxf7 Kxf7 14. Rhe1 Qxa2 15. Rxe7+
Kxe7 16. Qe4+ Kd8 17. Qxc6 {And Black has an extra piece, but his king is
terminally weak and his rook is under the attack for the moment, so White
definitely has ample compensation. The engine continues the line with} Rb8 18.
Bf4 Qa1+ 19. Kd2 Qa5+ 20. Ke2 Qb6 21. Nd4 {And claims that White retains the
advantage in a position where Black has to find virtaully the only moves to
survive. There is no denying Tal would thrive in a position like this, so it
is a bit surprising to see him not going for something like this.}) 12... Qa6 {
[%cal Ra6a2] Maintaining the control over the a2 pawn.} 13. Nf5 {The point of
White's idea. Now the knight is placed on an active f5 square with the gain of
tempo.} Bd8 14. Qh4 {Basically burning all the bridges and sacrificing the
piece in order to create some nasty kingside threats. It has to be said that
Tal is objectively not risking that much at this particular point as his play
is quite dangerous, but when you consider how good the position could have
been after the earlier Nd6 knight jump, it does seem a bit unecessary. ---
Then on the other hand, if Tal wasn't such a daredevil, we probably wouldn't
be analyzing this (as well as many other) games of his.} bxc4 {Of course -
what else?} 15. Qg5 {[%cal Rg5g7] Mate on g7 is now threatened, but Black does
have some defensive ideas.} Nh5 {[%csl Gg7][%cal Gh5g7] Defending the g7 pawn
and giving the piece back is an attempt to play for the win. Even though many
people associate Smyslov with quiet, positional play, he was a brilliant
calculator/tactician in his own right, so it is natural that he was tempted to
play for more than a draw - especially if you take into the account that he
had beaten Tal in the first round of this tournament.} (15... g6 {was the
other way of dealing with the threat, when after} 16. Nh6+ {Black has hardly
anything better than} Kg7 {And here White should probably repeat with} (16...
Kh8 {is too risky as after} 17. Bc3 {the knight on f6 is exposed and there are
already some nasty Rxd7 threats in the position.}) 17. Nf5+ (17. Bc3 {Now
doesn't work as the f6 knight is defended by the king. After} Qxa2 18. Rxd7
Bxd7 {Black is just winning.}) 17... Kg8 18. Nh6+) 16. Nh6+ (16. Qxh5 {would
be losing for White as after} Nf6 17. Qg5 Bxf5 18. Qxf5 Qxa2 {Black manages to
exchange virtually all the relevant attacking pieces and is just left with a
won position.}) 16... Kh8 17. Qxh5 Qxa2 ({Of course, not} 17... gxh6 {as it
decisively weakens the king. After} 18. Qxh6 {[%cal Gd2c3,Gf3g5] It is hard to
stop all the ideas (Bc3, Ng5).}) (17... Nf6 {Was playable here, though, when
after} 18. Qc5 {Attacking the rook on f8.} Nd7 19. Qd6 Qxa2 20. Bc3 {The
position is extremely tense and complicated, although Black can seemingly hold
the balance with the very difficult move} Bf6 21. Bxf6 gxf6 {And the engine
gives eternal zeroes here, of course.}) 18. Bc3 {The culmination of this sharp
and famous tactical skirmish.} Nf6 $4 {A fatal blunder, overlooking Tal's
devious reply.} (18... Bc7 {It was absolutely necessary to remove the bishop
on d8 and avoid the threat. Now White probably has to go for the draw with} 19.
Nxf7+ Kg8 20. Nh6+ {as playing for more might backfire. Note that the knight
is immune as after} gxh6 21. Qg4+ Kf7 22. Rxd7+ {Black will get mated shortly.}
) 19. Qxf7 {Smyslov surely missed this idea, diverting the rook on f7.} Qa1+ {
What else?} (19... Rxf7 20. Rxd8+ {Leads to a quick mate:} Ne8 21. Rxe8+ Rf8
22. Rxf8#) 20. Kd2 Rxf7 (20... Qxd1+ {also doesn't work due to} 21. Rxd1 Rxf7
22. Nxf7+ {[%cal Rf7h8,Rf7d8]} Kg8 23. Nxd8 {And White remains a piece up!})
21. Nxf7+ Kg8 22. Rxa1 Kxf7 {Now Black is "only" an exchange down, but his
pawns are also weak and there is no hope.} 23. Ne5+ Ke6 24. Nxc6 Ne4+ 25. Ke3
Bb6+ 26. Bd4 {And here Smyslov decided to throw in the towel. A marvellous,
fascinating game that demonstrated that even the great players like Smyslov 
(albeit out of form) can succumb to Tal's psychological pressure and hurricane
like pressure over the board. ---After this game, the path of the two
competitors diverged. Tal would go on to score a very convincing tournament
victory and then beat the great Botvinnik in the 1960 World Championship match,
while Smyslov would finish with a mediocre performance and slowly be
overshadowed by the talented generation in the 1960s and would not seriously
fight for the World title all the way until his resurgence in the 1980s (and
his final Candidates match against Garry Kasparov - in 1983!).} 1-0

[Event "Botvinnik - Tal World Championship Matc"]
[Site "Moscow URS"]
[Date "1960.03.15"]
[Round "1"]
[White "Mikhail Tal"]
[Black "Mikhail Botvinnik"]
[Result "1-0"]
[ECO "C18"]
[Annotator "USER"]
[PlyCount "63"]
[EventDate "1960.??.??"]

{In the previous game, we have already mentioned that Tal went on to win the
Candidates tournament in 1959, which qualified him for the World Chess
Championship match against Botvinnik, held in 1960. --- Even though the world
has seen that Tal's style can very well work against the very best, everyone
was curious to see if it can work as well against the formidable Patriarch,
who was very dismissive of Tal's "gambling" style in the past. --- This match,
dubbed "The War of Antipodes" by Garry Kasparov in his book On My Great
Predecessors, was very much anticipated and historical, and we will be
examining two games from it, starting with the very first game of the match.} 
1. e4 {No hesitation. Very natural for Tal to go for his favourite move in the
most important event of his career up to that point.} e6 {The French was
always one of Botvinnik's favourite openings throughout his career, although
in this particular match, this was the only game where he dared venturing it,
switching to Caro-Kann from the very next Black game. Apart from these two
openings, he was also a Sicilian player, but it is quite natural that his
match strategy didn't involve going for such a sharp opening against Tal.} 2.
d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Qc7 7. Qg4 {The Winawer
variation of the French remains to this day one of the most complicated,
fascinating and most difficult variations to understand. I will not venture to
dive deeply into its intricacies here.} f5 {One of the possible replies,
defending the g7 pawn, but one that has lost its popularity in the Modern day
and age.} (7... Ne7 {Is the main move, leading to a major opening line.}) 8.
Qg3 {[%csl Gc3][%cal Gg3c3] The queen on g3 is nicely positioned as it defends
the c3 pawn and still eyes the g7 pawn.} Ne7 {Black has to play this move
sooner or later as otherwise it is difficult to develop the kingside.} 9. Qxg7
Rg8 10. Qxh7 {Now Black is claiming it is difficult ofr the queen to return in
the game due to the pawn on f5. On one hand this is true, on the other hand,
the advance of the f-pawn has weakened the king.} cxd4 11. Kd1 {A very
extravagant move, side-stepping the check on c3, but also the one on e5. From
the opening principle viewpoint, it looks as if this move is total nonsense,
so let's try to explain it. Apart from the fact it parries the direct threats,
the king is actually not at all so badly placed in the center due to the fact
that Black's pawns are keeping all the lines closed and it is not clear how
Black will go about attacking it.} (11. Ne2 {With that being said, defending
c3 with the knight was perfectly possible - especially since the pawn on e5 is
also immune due to} Qxe5 12. cxd4 {When White regains the central control and
the dark-squares and is strategically already winning.}) 11... Bd7 {Black
tries to develop quickly and create the threat of Ba4, pressuring the c2 pawn,
but this is a bit too slow.} (11... dxc3 {For better or for worse, Black
should have taken the pawn on c3, although after something like} 12. Nf3 {
White suddenly has a pleasant position due to the bishop pair, passed h-pawn
and possibility to include the rook via the b1 square. Still, the position is
extremely complicated and sharp - which is very typical of this variation.})
12. Qh5+ {An annoying disruptive check, bringing the queen closer to the main
point of action with a gain of tempo.} Ng6 (12... Kd8 {is also not at all so
silly.}) 13. Ne2 {[%csl Gc3][%cal Ge2c3,Gc3d4,Ge2f4] Covering c3 and
potentially preparing Nf4.} d3 {A nice tactical move, trying to disrupt
White's harmony and open up the position in front of the king on d1 a bit.} (
13... Ba4 14. Nf4 {Is unpleasant for Black as now} Kf7 {Loses to} 15. Qh7+ Rg7
16. Qxg7+ Kxg7 17. Nxe6+) (13... dxc3 {might be relatively the best as now
after} 14. Nf4 {Black does have} Kf7 {Although here White has numerous way of
continuing, including the simple.} 15. Bd3 {[%cal Gh2h4,Gg2g4,Gh1e1,Ga1b1]
Finishing the development and intending Rb1 Re1 and so on.}) 14. cxd3 Ba4+ {
This turns out to be an empty check.} (14... d4 {For better or for worse, this
move should have been played, opening up the d5 square and the long a8-h1
diagonal fo the pieces. After} 15. cxd4 Nc6 16. Bd2 O-O-O {Black definitely
has more counterplay compared to what happened in the game, although here
White should still be objectively better - after all, three pawns are three
pawns.}) 15. Ke1 Qxe5 {Black regains one pawn and activates the queen, but it
turns out that this e5 pawn is not at all so relevant in these positions.
Furthermore the exposed state of the Black queen now allows White to quickly
catch up on the development.} 16. Bg5 {Very powerful, taking the long diagonal
under control and making it super difficult for White to castle.} (16. d4 {
Immediately, was also quite good.}) 16... Nc6 17. d4 Qc7 18. h4 {[%csl Gh4]
[%cal Gh1h3] And now comes the h-pawn. In these Winawer positions where White
captures on g7 and h7, the passed h-pawn is a very big asset as very often it
creates havoc in the Black camp and gets pushed very far very early in the
game. Furthermore, this opens up the h3 square for the rook.} e5 {This move
already feels somewhat desperate, but what else is Black to play? Due to the
bishop on g5 they can't castle and it is hard to tell what else should be the
plan. This move tries to exploit Black's lead in development at least,
although White is not THAT far behind + Black's king is also quite weak.} 19.
Rh3 {[%cal Gh3e3] The rook is ready to join the action via the 3rd rank. This
is not the only move in the position, mind you.} Qf7 {Trying to alleviate the
pin and move the knight from g6 away.} (19... e4 {Would allow} 20. Nf4) (19...
exd4 {also leads nowhere after either} 20. cxd4 ({or} 20. Nxd4 {[%cal Gh3c3]
Note how it is nice to have the rook on h3 defending c3 in these lines.})) 20.
dxe5 Ncxe5 {Trying to keep the position complicated.} ({With that being said} 
20... Ngxe5 {wouldn't have brought much relief after, say} 21. Nf4 Qxh5 22.
Nxh5 {All WHite's pieces are active, White has weaknesses on f5 and d5 and
White has the bishop pair and the passed h-pawn to top it all.}) 21. Re3 {
Activating the rook and creating a nasty pin and the threat of f4.} Kd7 22. Rb1
{Now the other rook is activate with the gain of tempo as well.} b6 23. Nf4 {
Now the knight as well. The only piece that is currently somewhat slumbering
is the bishop on f1. White's coordination is perfect while Black is struggling.
} Rae8 24. Rb4 {Another move activating a piece with the gain of tempo.} Bc6
25. Qd1 {Not the only move in this position, but not a bad one at all. Tal
brings the queen in the center of the board and tries to put pressure on the
d5 pawn.} Nxf4 26. Rxf4 Ng6 27. Rd4 Rxe3+ 28. fxe3 {A very unconventional, but
strong decision. White does ruin his pawn structure, but it prevents even a
hint of counterplay involving the advance of the f-pawn. Now c4 is a major
threat.} (28. Bxe3 f4 {Would be much more complicated, although White would
still retain a significant advantage after} 29. Qg4+) 28... Kc7 29. c4 {
Nevertheless! It seems strange that White is opening up the position when
Black is the one ahead in development, but it turns out that White's position
is very stable, while Black's king is extremely exposed and White's bishops
are very powerful.} dxc4 {It is probably better not to play this move, but it
is already hard to offer Black some advice.} 30. Bxc4 Qg7 31. Bxg8 Qxg8 32. h5
{And here Botvinnik finally decided he has had enough and decided to resign a
game. One of the most one-sided opening games of the World Championship Match
and one of the worst defeats for not only Botvinnik, but any World Champion.
This game is perhaps not the most typical Tal game, but it is one that
encapsulates very well his splendid feeling for such complicated, sharp and
tactical positions - a true Model Game for all Winawer afficionados. It is not
surprising that Botvinnik decided to avoid the French for the rest of the
match.} 1-0

[Event "Botvinnik - Tal World Championship Matc"]
[Site "Moscow URS"]
[Date "1960.03.26"]
[Round "6"]
[White "Mikhail Botvinnik"]
[Black "Mikhail Tal"]
[Result "0-1"]
[ECO "E69"]
[Annotator "USER"]
[PlyCount "93"]
[EventDate "1960.??.??"]

{Even though the first game of the Tal's 1960 World Championship Match against
Botvinnik was very convincing and one-sided, arguably the most famous,
beatiful and impactful match was the 6th game. It was played after four draws
in which Botvinnik was putting considerable pressure on Tal and it featured
one of the most paradoxical, daring and provocative sacrifices ever seen at
the World Championship level. --- To this day it remains one of my favourite
Tal's games not only due to its typical Tal nature, but also due to the fact
it was played at the heights of the chess summit. Let's dive deep into this
fantastic encounter.} 1. c4 {Throughout his life, Botvinnik had affinity for
the English Opening, although he was, naturally, a big master of 1.d4 as well.}
Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. d4 d6 {Given Tal's style, The King's
Indian Defense was not a surprising choice.} 6. Nc3 Nbd7 {I was under the
impression that developing schemes with the knight on d7 are nowadays rare and
unexplored, but now I see that it is the most common move in the database
against the Fianchetto setup by White, so what do I know. The idea is to place
the knight on a square where it supports e5 but where it isn't in the way of
the d-pawn. Against the fianchetto setup, Black doesn't always go for the
typical kingside attack with f5-f4, so the knight arguably has more
flexibility on d7 than it would have, say, on c6 (or e7, following d5 by White)
.} 7. O-O e5 8. e4 {Occupying the center is most ambitious, also not the only
way of handling the position. It seems as if White is locking the bishop on g2,
but the argument is that seizing the space advantage while trying to limit
Black's counterplay is very principled - especially since Black often
exchanges on d4 on the next move.} c6 {[%csl Gd5][%cal Gc6d5] This is also a
very common line. Black opens the way for the queen and adds some more control
to the d5 square.} (8... exd4 {Taking on d4 is another very common move, that
was played by a number of strong players in the past, including very recently.}
) 9. h3 {[%csl Gg4][%cal Gh3g4,Rc8g4] Taking the g4 square under control is
very useful as it prevents the future Bg4, fighting for the d4 square.} Qb6 {
[%cal Rb6d4,Rb6b2] This queen move is also the most common move in this
position, but it is questionable whether it is necessarily the best. Now the
threat is to capture on d4 and then on e4 and White needs to react, but
Black's queen can easily become exposed to some unexpected ideas on this
square.} 10. d5 {[%csl Gd5] Botvinnik embarks on a typical King's Indian move,
gaining some more space and locking the center. However, in this particular
position, it is probably more precise to either keep the tension, or go for a
sharp pawn sacrifice, which we will see in notes very shortly.} (10. Re1 {
Defending e4 and dealing with the threat, is more common.}) (10. c5 {Is the
choice of the modern engine that was seen in more than 1000 games that reached
this position. The idea is to take on e5 on the next move after} dxc5 11. dxe5
Ne8 {And then to sac a pawn on e6 after} 12. e6 fxe6 13. Ng5 {Naturally, one
doesn't go for such a line without due home preparation - especially in 2022.
Moreover, such a sacrificial, "speculative" pawn sacrifice was very much NOT
in Botvinnik's style.}) 10... cxd5 11. cxd5 Nc5 {Now we have reached a very
typical King's Indian position where White has more space, but where Black has
some pieces on the queenside and the c-file to work with.} 12. Ne1 {The idea
is to head to d3 and eliminate Black's active knight on c5.} Bd7 13. Nd3 Nxd3
14. Qxd3 Rfc8 {This move is a bit provocative and semi-waiting. Black gives up
the plan of pushing the f-pawn (for which the rook was ideal on f8) for now
and brings the heavy pieces to the open c-file.} (14... Nh5 {According to
Kasparov's notes in On My Great Predecessors, Tal wrote in one of his books
that he was afraid of} 15. Be3 Qd8 16. Qe2 (16. Nb5 {Should be White's choice
and already the only attempt to play for the advantage.}) 16... f5 (16... Qe8 {
Protecting the knight and preparing f5 next, was, though, much better.}) 17.
exf5 {And now Black can't recapture with the pawn on f5 as the knight on h5
would be hanging which is a highly undesirable outcome in the King's Indian
once Black plays f5, soooo.}) 15. Rb1 {[%cal Gb1b2] Defending b2 and preparing
to develop the bishop.} Nh5 {A bit inconsistent with the previous move of Rfc8,
but as I mentioned, Tal was somewhat deliberately playing in a very
provocative manner.} (15... Qd8 {The computer suggests this positional move,
with ideas of a6-b5 or h5-Qf8-Bh6. Apparently, the position demanded strategic
and positional play.}) 16. Be3 Qb4 17. Qe2 Rc4 {Pushing the f-pawn is still
impossible due to the potentially hanging knight on h5 so Tal brings the rook
into the action.} (17... Qc4 {Trying to exchange queens by force, was also
worth considering.}) (17... f5 18. exf5 {Once again leaves Black without a
good way of recapturing.}) 18. Rfc1 Rac8 {Doubling on the c-file looks logical,
but objectively, Black's pieces shouldn't be able to achieve all that much and
should be pushed back from the c-file in the near future.} 19. Kh2 {It is
sensible to move the king out of the harm's way. The engines suggest some
weird looking, computer lines as better options, but I was unable to quite
understand them so I haven't bothered including them in the annotations, since
the main highlight of the game is just in front of us anyway.} f5 {Now Black
finally strikes with the f-pawn, despite the fact that he is still unable to
recapture with the pawn as this now comes with a tempo on the rook on b1.} 20.
exf5 Bxf5 {[%cal Rf5b1]} 21. Ra1 {But what now? g4 is being threatened and it
looks like as if Black will have to retreat one of the two pieces. However,
the word retreat did not yet appear in Tal's vocabulary in 1960.} Nf4 {[%csl
Rf4] A tremendous, typical Tal move, that must have come as a huge shock to
Botvinnik. Tal sacrifices a piece in order to kick the bishop on e3 away and
create a strong pawn on f4 that can be used to disrupt the pieces on the 2nd
rank. --- Even though the move is objectively not the best, it must have taken
Botvinnik out of the comfort zone as instead of the slow strategic squeeze, he
suddenly has to navigate his way out of the "deep dark forest" - which was
never an easy task against the like of Mikhail Tal.} (21... Nf6 {Objectively,
Black' should retreat after} 22. g4 Bd7 {Accept that he is worse and wait for
a more desirable turn of events in the future.}) 22. gxf4 {Of course - the
knight has to be accepted.} exf4 23. Bd2 {This most obvious, natural retreat
of the bishop turns out to be a mistake that allows Tal completely back in the
game as it interferes with the queen's defence of the important b2 square.} (
23. a3 {With that being said, it was necessary to kick the queen away from the
a5 square and then go the other route - capture the pawn on a7 after} Qb3 24.
Bxa7 {Kasparov went on to reproduce lengthy analysis here in his book, quoting
several resources such as match bulleting and trying to demonstrate that White
is objectively winning here. Understanding of such a position at the outset is
very difficult, but it transpires that Black can't really trap the bishop and
that the fact that the b2 pawn survives in these variations makes a lot of
difference. I will not bother you with all the details, let me just mention
that} Ra8 {is met with the tricky} 25. Nb5 Rxc1 26. Rxc1 Be5 27. Nd4 $1 {
Virtually the only winning move.} Qd3 28. Qxd3 Bxd3 29. Nf3 Rxa7 30. Nxe5 dxe5
31. d6 {And White should win this endgame in the end. This variation is the
best example of the crazyness that Tal was able to create on the board. It is
actually amazing how deep some of his combinations/concepts were and how much
you have to click around with the engine to get to their bottom. It is not at
all surprising that Botvinnik - just like many of Tal's other opponents, was
simply unable to cope with such hurricane-style chess over the board.}) (23.
Bxa7 Qa5 {regains the piece, with unclear consequences.}) 23... Qxb2 {With
that being said, Tal himself was not completely immune to mistakes in these
wild positions. Here capturing the b2 pawn turns out to be premature.} (23...
Be5 {Was mentioned by Kasparov in the book and was also apparently written by
Tal on the score-sheet before he changed his mind. The idea is to activate the
bishop and create the threat of f3 before taking on b2.} 24. f3 {The best, but
not at all obvious defence.} (24. Bf3 {White could have tried blocking the
pawn with the bishop as well, but now after} Qxb2 25. Rab1 Bxb1 26. Rxb1 Qc2 {
The pawn on d6 is defended so} 27. Nb5 {Simply loses to} Qxb1) 24... Qxb2 25.
Nd1 {Now, with the bishop on e5 and f3 alredy being played, this defensive
idea is possible, as the queen doesn't have the access to the e5 square.} Qd4 {
And here Black doesn't have any objective advantage. More importantly, the
position is a bit more stablized for White. Tal apparently saw/sensed that his
choice would be much more uncomfortable for Botvinnik and, just as so many
times before, he decided to pull the trigger and gamble for a little bit.} ({or
} 25... Qxa1 26. Rxa1 Bxa1)) 24. Rab1 {The culmination of the entire battle.} (
{Note that this retreating move doesn't work here as the queen has the e5
square available.} 24. Nd1 Qe5 {And Black can't exchange as after} 25. Qxe5 (
25. Qf3 {has to be played instead, when still after} Be4 {Black does retain
some advantage}) 25... Bxe5 {Both the bishop on g2 and the rook on a1 are
exposed and Black is winning ,despite being a piece down.}) 24... f3 {Another
devilish, typical Tal trick that poses more extremely difficult problems in
front of the opponent. The idea is to open the diagonal for the bishop in
order to have a nasty Be5 check available. Alas, as quite often with Tal's
combinations, it turns out that the modern engine points out it is losing -
but only in one variation. --- According to Kasparov, the noise in the
spectator's hall become so vibrant at this very moment that the unnerved
Goldberg - Botvinnik's second - asked for the play to be transferred to an
isolated room.} (24... Bxb1 {Objectively, Black should take on b1 and try to
play the position after} 25. Rxb1 Qc2 {When White has to find the nasty} 26.
Nb5 {For a clear cut advantage. The idea is that without the bishop on e5, the
d6 pawn is not protected so Black can't take the rook on b1} Qxb1 (26... Be5 {
Is a better defense, when after} 27. Nxd6 Bxd6 28. Qe6+ Kg7 29. Rxb7+ R8c7 {
Black is somehow surviving for the moment, although White is clearly in the
driver's seat.}) 27. Nxd6 {And due to the threats of Nxc4 and Qe6, White is
completely winning.}) 25. Rxb2 $4 {[%cal Rg7a1,Rc8c1] The historic blunder
that largely determined the outcome of the first Botvinnik- Tal match. At the
height of the battle, Botvinnik finally falters under Tal's pressure and aims
to exchange the queens, only to end up in a completely lost position where his
pieces will be completely tied up.} (25. Bxf3 {White should have taken the
pawn on f3 at once and asked Black - show me what you got with the opening of
the diagonal. The best line continues} Bxb1 26. Rxb1 Qc2 {And here Kasparov
quotes a spectacular winning line found by Salo Flohr} 27. Be4 {A marvellous
counter-sacrifice, hitting the queen and forcing the reply.} (27. Rc1 {The
merciless computer points out the more cold-blooded way to proceed} Qb2 (27...
Qf5 28. Bg4 $18) 28. Bg4 {And again the weakness of the Black king is decisive
and th erook on c8 is unnerved, forcing Balck to remove the pressure on the
c-file and deal with the defence of their own king.}) 27... Rxe4 28. Nxe4 $1 {
Just giving up the rook on b1.} Qxb1 29. Nxd6 {[%cal Rd6c8,Ge2e6] And even
though Black is now a clean exchange up, the weakness of the king on g8 is
decisive and White is the one totally winning with Qe6 coming next.}) 25...
fxe2 {[%cal Rg7a1,Rf5b1,Rc8c1] Suddenly, Black's bishops and rooks are
coordinated wonderfully and the strong passed pawn on e2 is an important asset,
as well.} 26. Rb3 {Trying to defend the knight on c3.} Rd4 {[%cal Rc8c3,Gd4d1]
A powerful move, threatening the capture on c3 and infiltration on d1.} 27. Be1
{Trying to cover the queening e1 square at all costs.} (27. Be3 Rxc3 28. Rbxc3
Rd1 {And the pawn will queen.}) 27... Be5+ {[%cal Re5h2,Ge5f4] A decisive
inclusion of the bishop, that goes to f4.} 28. Kg1 Bf4 {A prosaic and safe way
to win.} (28... Rxc3 {This immediate sacrifice also works as after} 29. Rbxc3
Rd1 30. Rc7 {Only now does Black attack the rook on c1 via either f4 or b2.}
Bf4 {Black has to endure big material losses.}) 29. Nxe2 Rxc1 30. Nxd4 Rxe1+
31. Bf1 Be4 {And now with the bishop pair, extra pawn and more active pieces,
there is no raeson to doubt that Black is completely winning and the rest is a
matter of technique for a player of the caliber of Tal.} 32. Ne2 Be5 33. f4 Bf6
34. Rxb7 Bxd5 35. Rc7 Bxa2 36. Rxa7 Bc4 37. Ra8+ Kf7 38. Ra7+ Ke6 39. Ra3 d5
40. Kf2 Bh4+ 41. Kg2 Kd6 42. Ng3 Bxg3 {An important tool in the hands of every
suffering chess player when it comes to winning won positions - simplification.
Here Tal goes for the rook endgame, correctly judging that the passed c-pawn,
supported by the king, will eventually decide the game.} 43. Bxc4 dxc4 44. Kxg3
Kd5 45. Ra7 c3 46. Rc7 Kd4 47. Rd7+ {And here Botvinnik decided to resign
without even waiting for a reply. If you are unsure why exactly this rook
endgame is won - eventually the pawn will cost White a rook, and in the
meantime they will be way way too slow with the counterplay on the kingside.
If you are unsure about the exact winning technique, I recommend you to check
a chapter on endgame for beginners in a book such as Silman's Amateur Mind.
--- In any case, this is, for me, one of the most memorable, most fascinating
and most entertaining Tal games of all time. It is maybe not as spectacular as
some of his other games, but this is by far the most Tal-like game played at
such a high level against such a formidable opponent. --- The fact that he
managed to rattle the great Patriarch with his daring, semi-gambling style of
play is really something. After this game, Botvinnik also lost the next one.
And even though he tried to put up a find by the end of the match and at some
point even reduced the difference in score to 1, the outcome of the first "War
of the Antipodes" was never really in doubt.} 0-1

[Event "Varna ol (Men) fin-A"]
[Site "Varna BUL"]
[Date "1962.10.06"]
[Round "9"]
[White "Mikhail Tal"]
[Black "Hans-Joachim Hecht"]
[Result "1-0"]
[ECO "E13"]
[Annotator "USER"]
[PlyCount "97"]
[EventDate "1962.??.??"]

{The following game was played during the Varna Olympiad in 1962. A year
earlier, Tal has lost the World Championship Title in the 1961 return match
against Botvinnik. More importantly, it was around that time that his chronic
health issues - which would become an unfortunate lifetime trademark of his -
became more serious. --- In 1962, he had a kidney operation due to which he
had to withdraw from the 1962 Curacao Candidates tournament. Thus, by the 1962
Chess Olympiad in Varna, he was barely recovering from all these unfortunate
events and as a result, ended up playing on the 2nd reserve board. --- It was
quite fortunate, as he not only won the board gold medal, but he also played
the following game that would soon become one of those memorable Tal
encounters that stays in your mind for a while.} 1. d4 {As mentioned earlier,
1.d4 was not really the most common opening move for Tal, but he could, of
course, vary as White.} Nf6 2. c4 e6 3. Nf3 b6 4. Nc3 Bb4 5. Bg5 Bb7 6. e3 h6 {
This variation of the Queen's Indian/Nimzo hybrid is probably not the most
critical for Black, but it does appear to this day in games of strong players 
(albeit not that much in the last decade).} 7. Bh4 Bxc3+ 8. bxc3 d6 {So, via
the transposition we have reached some sort of Nimzo-Indian position where
White has the bishop pair and Black has the fluent pawn structure and
potential target in the form of the doubled c-pawns. Objectively, White's
dynamic play should always more than compensate for the static weaknesses,
although I have personally always found Black's position easier to play in
these types of structures. But I guess it is a matter of taste.} 9. Nd2 {
Moving the knight is a standard plan - the idea is to prepare f3-e4 pawn push
and establish a big center.} e5 {Black usually counters this idea with a
central expansion of their own.} (9... g5 {The alternative plan is to chase
the bishop from h4 and break the pin at the cost of the slight weakening of
the kingside pawns.} 10. Bg3 Nbd7 {This was played in some very high-profile
games, such as: Shankland,S (2720)-Xiong,J (2690) Saint Louis 2022}) 10. f3 {
All according to the plan, although this is definitely not the only way of
continuing in this position.} Qe7 11. e4 {Now we have this typical stare-off
contest between the pawns on e4 and e5. On one hand White has gained some
space and restricted the bishop on b7 - on the other hand, the doubled pawns
on the c-file are now even weakes as the center has potentially lost some
mobility.} Nbd7 12. Bd3 Nf8 {[%csl Rf4][%cal Gf8g6,Gf8e6,Re6f4] A good
maneuver. The knight is heading to g6 to gain a tempo on the bishop and then
it will also eye the f4 square.} 13. c5 {This move, undoubling the pawns and
getting rid of the potential weakness is very typical, but not strictly
necessary and probably a bit too hasty here. White will end up losing a pawn
for questionable compensation.} (13. O-O {Castling is also possible, although
it is a bit premature as after} Ng6 14. Bf2 Nf4 15. Bc2 O-O-O {Black can
safely castle queenside and then start attacking on the kingside. With the
center so stable, White doesn't need to reveal his king's position just yet!})
(13. Nf1 {[%cal Gf1e3] Trying to get the knight to e3 and not yet placing the
king on the kingside, is the main move in this position!}) 13... dxc5 14. dxe5
$2 {This move is objectively bad as it simply loses a pawn for no compensation,
although it does open the position for the two bishops.} ({A move like} 14. d5
{accepting that a pawn has been lost but trying to keep the position closed,
is definitely a better try that was tested in a game between two grandmasters
Indjiæ and Romanov in 2016. That game ended in a draw.}) 14... Qxe5 {[%cal
Re5c3] Now the queen is centralized and exerting strong pressure on the c3
pawn, while the pieces on the d-file are also a bit loose. White is already
significantly worse, objectively speaking.} 15. Qa4+ {This check tries to
disrupt Black's forces.} c6 {And Hecht immediately goes wrong. The problem of
this move is not so much that the bishop on b7 is blocked - but more that the
d6 square has been weakened. We will see its significance very, very soon.} ({
It is far better to block with one of the knights, say} 15... N8d7) ({or} 15...
N6d7 {In that case Black is ready to play Ng6 and O-O next with a perfectly
good and healthy position.}) 16. O-O {[%csl Rd6][%cal Gd2c4,Rc4d6] Hecht
probably missed this. Now Nc4 is coming next almost irrespective of what Black
does.} Ng6 ({Taking the pawn here is bad as after} 16... Qxc3 17. Nc4 {And the
check on d6 or capture on a7 is coming and Black is in trouble, say} b5 18.
Nd6+ Kd7 19. Nxb5 $1 cxb5 20. Bxb5+ Ke7 21. Rac1 {With a decisive attack
against the king in the center.}) (16... Rd8 {is met with} 17. Qxa7 Rxd3 18.
Nc4 {And everything works in White's favour, say} Qc7 19. Rad1) 17. Nc4 {
[%cal Rc4e5] A nice intermezzo, gaining a tempo on the queen.} Qe6 18. e5 {
Another powerful move, trying to keep the king in the center of the board.} b5
{A tricky counterstrike and absolutely the best move in the position, creating
a total mess in the position, with half of the board hanging.} (18... Nxh4 {
would be met with} 19. Nd6+ {keeping the king in the center and now after} Kf8
20. Rae1 {Is very strong, when the knights on h4 and f6 as well as the bishop
on b7 are under the attack. White has an ongoing initiative here as Black's
king is really suffering from the lack of castling rights.}) 19. exf6 $3 {
A legendary move that made this game famous. According to Tal himself, at this
exact point, legendary grandmaster Miguel Najdorf who was watching the game,
approached him and kissed him. This ultra brilliant move is just so incredibly
beautiful and it is really a pity it is not the best move in this position,
objectively speaking.} (19. Qb3 {The more prosaic retreat of the queen,
maintaining the threat of Nd6, we apparently much better. White has two pieces
hanging, but it is not really great for Black to capture either of them.} Nxh4
(19... bxc4 20. Qxb7 {is immediately over} Rd8 21. exf6 cxd3 22. fxg7) 20. Nd6+
{A nasty intermediate check - the consequence of Black playing c6 earlier in
the game!} Kf8 21. Qxe6 fxe6 22. Nxb7 {[%csl Rc5,Rc6][%cal Gb7c5,Gd3e4] And
after the dust has settled, White is left with a superior endgame, despite
being a pawn down - mainly because all Black's pawns are weak, their pieces
are scattered, they lag in development and moves such as Nxc5 and Be4 are
coming with great effect.}) 19... bxa4 {Of course - what can be more natural
than capturing the queen. However, now Tal unleashes another very famous
combination!} (19... O-O {Simply castling out of it and not touching any of
the hanging pieces, is the typical engine reply, which is not at all very
human-like. Tal mentioned the move} 20. Rae1 {As his intention (you have to
marvel and his imagination), when after the approximate} (20. Qc2 {It has to
be said that Kasparov's suggestion of simply retreating the queen was arguably
a better attempt to fight for the advantage. The idea is to take on g6 after}
Nxh4 (20... bxc4 21. Bxg6 fxg6 22. Qxg6 {When White has a major advantage in
this endgame due to Black's tripled (!!!) pawns.}) 21. Na5 Ba6 22. fxg7 Kxg7
23. Qf2 {When White definitely has some compensation for the pawn and can play
on for the win!}) 20... Qxe1 21. Rxe1 bxa4 22. Bxg6 fxg6 23. Re7 g5 24. Rxg7+
Kh8 25. Bg3 Ba6 26. Be5 Bxc4 27. f7 {Things apparently end in a draw. Thus, 20.
Rae1 probably doesn't deserve a question mark as Kasparov stated in his books
- this is one of those rare instances where more modern engines actually
approve of Tal's choice!}) 20. fxg7 Rg8 21. Bf5 $3 {The point of Tal's
combination! Instead of moving the attacked piece, Tal leaves two more en
prise and attacks the queen, but it transpires that Black can't really take
the knight on c4 or the bishop on f5.} Nxh4 {Ignoring the threat to the queen
and taking the bishop is a legitimate defense - although the engine points out
an even stronger, more paradoxical attempt.} ({First of all, capturing on f5
is bad due to a simple fork} 21... Qxf5 22. Nd6+ Kd7 23. Nxf5 {When White has
a superior endgame due to the much better pawn structure.}) (21... Qxc4 {
Taking the knight is also losing due to} 22. Rae1+ {When the bishops, the pawn
on g7 and the rook create a mating net!}) (21... Ba6 {However, there are two
quiet defensive moves available at Black's disposal. The computer mentions
some crazy defence - moving the bishop out of the potential fork - as the best
possibility. Now White actually has to find a very precise sequence to stay in
the game. Play might continue} 22. Bxe6 fxe6 23. Nd6+ Kd7 24. Ne4 {These are
all virtually the only moves to stay in the game.} Bxf1 25. Nf6+ Kd6 26. Nxg8
Rxg8 27. Bg3+ Kd5 28. Kxf1 {And after all the fireworks, we have another
endgame, where chances are level. It is true that Black has terrible pawn
structure. But on the other hand, the king is very active on d5 and the pawn
on g7 is falling. White is the one objectively playing for the win here, but
there is still a lot of chess remaining.}) 22. Bxe6 Ba6 23. Nd6+ Ke7 {Now it
seems as if White is losing a piece, but there is a nice intermezzo available.}
24. Bc4 {Attacking the bishop on a6 and saving a piece as Black is unable to
capture both hanging pieces at the same time!} Rxg7 (24... Kxd6 25. Bxa6 Rxg7 {
Comes to the same.}) (24... Bxc4 25. Nxc4 {Heading into a knight endgame is no
fun either. Once again Black's pawn structure is horrible.}) 25. g3 Kxd6 26.
Bxa6 {As usual in chess, after a lot of fireworks, we have reached a technical
endgame where White has some chances due to the better pawn structure - but
also due to the fact the bishop is usually stronger than the knight in
positions with pawns on the both sides of the board. --- With best play it
should probably be a draw, but as anyone who has ever met Magnus Carlsen over
the board knows - there is a big difference between an equallish and a drawn
position. It is actually remarkable how quickly the game went downhil for
Hecht from this point.} Nf5 {This is probably a serious mistake already. The
knight was not threatened yet and yet Black willingly spends a tempo moving it
and removing the attack on the f3 pawn.} (26... Rb8 {Seizing the open file and
preventing White from doing the same was the best. Note how White can't
contest due to the fact that f3 pawn is under the attack. White only has a
slight advantage here.}) 27. Rab1 {Now White seizes the open file for his own
rook and creates some fresh ideas of Rb7.} f6 $2 {But this move is just an
outright blunder that virtually loses the game on the spot as it opens the 7th
rank. However, Black's defence was already a bit trickier than on the previous
move.} (27... Ne3 {Preventing the rook from coming to d1 for the moment and
intending Nd5 was most resillient.}) 28. Rfd1+ {Now Black is in gigantic
trouble as all White's pieces are active and Black's forces are completely
uncoordinated.} Ke7 29. Re1+ {It is a bit surprising that Tal didn't take the
pawn on c6 here.} (29. Bb7 {Was winning the pawn back and activating the
bishop further. Maybe Tal wanted to keep the activity and wasn't too concerned
about getting the pawn back?}) 29... Kd6 30. Kf2 c4 {The idea of this move is
to open up the c5 square for the king but also to secure the d5 square for the
knight.} (30... Rd7 {Is indicated by the computer as the most resillient,
preparing to run with the king to e7 if required.}) 31. g4 {A reasonable move,
chasing the knight away. But the problem is that the knight is now forced to
occupy a better square - one on d5.} (31. Bxc4 {Taking the pawn here is not
optimal as after} Re7 {is now possible as there aren't any checks on b7 and
also the king can go to c5 if required. This endgame is all about the piece
activity and preventing Black from coordinating their forces.}) (31. Rb4 {
[%cal Rb4c4,Rb4a4] Activating the rook along the 4th rank and intending to
take on c4 was probably stronger than the text move.}) (31. Re4 {With similar
ideas, was likewise somewhat better.}) 31... Ne7 32. Rb7 {This actually
relinquishes a big part of White's advantage as it allows Black a surprising
defensive resource.} (32. Bxc4 {At this point, taking the pawn and then
thinking later was probably the best way forward.}) 32... Rag8 {[%csl Gh6]
[%cal Rg8g2,Gf6f5] It is very surprising to double the rooks on the
semi-closed file, but Black now has concrete ideas of undermining the
structure with h5 and f5 and trying to infiltrate.} 33. Bxc4 {Only now does
White take the pawn, but now it happens under the inferior circumstances.} Nd5
34. Bxd5 cxd5 35. Rb4 {It was already very difficult to win the position, but
this allows Black to simplify immediately.} (35. Reb1 {Keeping the option of
exchanging the rooks and reducing the effect of the battery on the g-file was
probably better, although Black is now very close to the drawing margin.})
35... Rc8 $2 {But tis move is a big mistake as Black misses the best
opportunity to exchange some pawns and create the threat of the counterplay.} (
35... f5 {[%cal Rf5g4] Would have almost guaranteed a draw. The point is that
after} 36. h3 (36. gxf5 Rg2+ {Is actually losing for White.} 37. Ke3 (37. Kf1
Rg1+ 38. Ke2 (38. Kf2 R8g2+ 39. Ke3 Rxe1+) 38... Re8+) 37... Re8+) 36... h5 37.
Rxa4 hxg4 38. hxg4 fxg4 39. fxg4 Rxg4 {White simply can't win.}) 36. Rxa4 Rxc3
37. Ra6+ Kc5 38. Rxf6 {Now Black loses a few vital pawns and White ends up
with two connected passed pawns on the kingside. The rest is not of particular
interest as Tal went on to convert the advantage smoothly.} h5 39. h3 hxg4 40.
hxg4 Rh7 41. g5 Rh5 42. Rf5 Rc2+ 43. Kg3 Kc4 44. Ree5 d4 45. g6 Rh1 46. Rc5+
Kd3 47. Rxc2 Kxc2 48. Kf4 Rg1 49. Rg5 {A fascinating game, featuring a lot of
instructive opening innacuraccies, a fabulous middlegame skirmish/combination
and also a very instructive endgame. It may not be one of Tal's most accurate
games, but the aesthetic value of the combination started with 19.exf6 is what
has etched it in my heart and the chess history books forever.} 1-0

[Event "Tal - Portisch Candidates Quarterfinal"]
[Site "Bled YUG"]
[Date "1965.06.28"]
[Round "2"]
[White "Mikhail Tal"]
[Black "Lajos Portisch"]
[Result "1-0"]
[ECO "B11"]
[Annotator "USER"]
[PlyCount "53"]
[EventDate "1965.06.26"]

{Fast forward three years later. Even though back in 1961 Tal started having
serious health issues that would pester him throughout his life, the kidney
operation in 1962 apparently had some positive effects and Tal continued
playing at the highest level. --- In the 1963-1966 World Championship Cycle,
he qualified for the Candidates from the Amsterdam Interzonal tournament. This
time, instead of the marathon Candidates tournament, the cycle was held in the
form of knock-out matches and Tal's opponent in the first, quarterfinal match
was the Hungarian Grandmaster Lajos Portisch. --- We will take a look at the
game two from this match, which is another one of those celebrated Tal flights
of fantasy.} 1. e4 c6 {According to Kasparov, this was one of the very first
times that Portisch played the Caro-Kann.} 2. Nc3 {We have previously seen how
Tal chose the rare setup in his 1959 Candidates game against Smyslov. Here, he
opts for the Two Knights Variation, which is a very big and respectable
variation nowadays - but which I feel was not the most mainstream opening line
at the time when this game was played.} d5 3. Nf3 dxe4 {Kasparov mentioned
that this is not the most accurate, but it is the 2nd most common move in this
position.} (3... Bg4 {This bishop pin is what consitutes the mainline.}) 4.
Nxe4 Bg4 {Only this move is somewhat imprecise, as it is usually better to
either develop the bishop OR to capture on e4 - but not both.} (4... Nf6 {
Is what constitues the mainline today but once again - let's now deelve too
deep into the opening theory of this variation.}) 5. h3 Bxf3 6. Qxf3 {In this
variation, White simply has the advantage of the bishop pair, although Black's
pawn structure is very solid as it is lacking weaknesses, which is one of the
reasons why so many players are attracted to this Caro-Kann structures.} Nd7 7.
d4 Ngf6 8. Bd3 Nxe4 9. Qxe4 e6 10. O-O Be7 11. c3 {A typical scenario for the
structure where the d4 pawn is facing the pawns on e6 and c6 has arisen. White
has a bit more space and the bishop pair, but Black is very solid - especially
since two pairs of minor pieces have already been exchanged (which also
benefits the side with less space). --- With that being said, White should
objectively be better here. The general idea is to be patient, and increase
the space advantage both on the queenside and on the kingside, by pushing the
pawns, although it has to be prepared and timed correctly. ---} Nf6 12. Qh4 {
A very aggressive post for the queen, trying to stay close to the king and the
kingside.} Nd5 {It was perfectly possible to castle, but Portisch wanted to
bring the pieces to more active squares first.} 13. Qg4 Bf6 14. Re1 Qb6 {
A little bit too optimistic. Portisch delays castling for yet another move and
tries to pin the bishop on c1 to the defence of the pawn on b2. However, the
queen doesn't really belong on b6 here and it was once again better to simply
castle.} 15. c4 {A very aggressive, typical Tal continuation. He wants to
chase the enemy knight from the strong central post on d5. Usually, this move
has to be carefully timed as in many cases the pawn on d4 can turn out to be
weak, but here Tal had concrete attacking ideas in mind.} ({With that being
said, virtually any other move such as} 15. Qh5 {keeping some pressure and
making it as difficult as possible to castle, was possible. One sample
continuation showcasing the idea of advancing the kingside pawns continues} g6
16. Qf3 Bg7 17. h4 {White has a very promising position with the two bishops.
A typical scenario for this variation - Black is solid, but very passive.})
15... Nb4 {Now what? Isn't White just losing the pawn on d4?} (15... Ne7 {
Trying to avoid the sacrifice that happened in the game was also possible.
Here White is forced to sacrifice a pawn, but after either} 16. d5 ({Or} 16.
Be3 Qxb2 17. Rab1 Qa3 18. Be4 {White has a lot of play for the pawn.}) 16...
cxd5 17. Bg5) 16. Rxe6+ {A tremendous idea, sacrifing a full rook for the
attack on the king that has overstayed the welcome in the center of the board.
At first glance, this might seem extremely suspicious as White only has the
queen around the king, the bishop on d3 is under the attack and the entire
queenside is undeveloped. However, Tal tries to make an argument that the
terrible position of the opponent's king will provide him with more than
enough opportunity to bring in the reserve and attack it. --- Objectively
speaking, this sacrifice shouldn't be sufficient for more than a draw,
although as usual in Tal games, the objective evaluation is not of primary
importance. It has to be said this displays an amazing boldness - remember
that this was the second game of a Candidates match!} fxe6 17. Qxe6+ {Black
has three possible ways of dealing with the check and every one of them should
be examined.} Kf8 {With this move, the king goes into the more dangerous side
of the board.} (17... Kd8 {Leads to a draw as after} 18. Qd6+ {repetition is
inevitable:} Ke8 (18... Kc8 19. Bf5#) 19. Qe6+ {But here,Kasparov's comment is
interesting: "Here psychology again comes into plaY: who would agree to a draw
with an extra rook?"}) (17... Be7 {This natural interception was what Tal had
to calculate very deeply. Here he prepared a devilish move:} 18. Bg6+ (18. Bg5
{Doesn't work at once as after} Qc7 19. Re1 {There is this nasty intermediate
move} Nxd3 {Hitting the rook on e1!}) 18... Kd8 (18... hxg6 19. Bg5 {IS the
idea, when after} Qc7 20. Re1 {Black is absolutely helpless.} Nd3 21. Qxg6+ {
This check wouldn't be possible if the bishop wasn't sacrificed!} Kf8 22. Rxe7)
19. Bf5 {Threatening mate on d7} Qxd4 {The only move.} (19... Qc7 20. Bf4 {
And White will mate.}) 20. Bf4 {And Kasparov states that this position
appealed to Tal and provides a long and approximate variation that
demonstrates how White has practical chances, but how with the best play Black
should be able to force White to take the perpetual. --- Thus, even with best
play, Black's best bet would be to reach a draw, which means that the whole
combination is semi-correct, but very tough to handle over the board.}) 18. Bf4
{[%cal Gf4d6] Threatening mate in one.} Rd8 (18... Re8 {Loses to} 19. Bd6+ Re7
20. Re1 Qc7 21. Bxb4 {When Black's defence is collapsing.}) 19. c5 {[%cal
Rc5b6] Hitting the queen with a gain of tempo and creating an outpost on d6.}
Nxd3 {Black is forced to give up the queen.} ({It is not at all obvious why
moving the queen to the only available square is so bad, but after} 19... Qa5
20. Re1 {Black is completely helpless against the threat of Bd6. Here you can
see why going to f8 was so dangerous - mating threats appear all the time.})
20. cxb6 Nxf4 21. Qg4 Nd5 22. bxa7 {Thus, the dust has settled and White has a
queen and two pawns for the bishop, knight and the rook. However, the pawn on
a7 is very dangerous and Black's pieces are sorely lacking in coordination -
so he already has to find the only defence to stay alive.} Ke7 {Poritsch wrote
that he saw the move g6, but though this is good enough as he saw that the
checks by heavy pieces are not as dangerous. However, he overlooked a strong
reply that Tal, naturally finds!} (22... g6 {With the idea of placing the king
on g7, is much better. The point is that now the advance of the b-pawn doesn't
have the same effect as the king will not get opened. For example} 23. b4 Kg7
24. b5 Rhf8 25. bxc6 bxc6 {And with the king on g7 instead of e7, the opening
of the b-file and the position is far less relevant!}) 23. b4 $1 {A very
strong move, overlooked by Portisch. The pawn goes like a battering ram to b5
in order to open up Black's queenside and lines leading to the enemy monarch.}
Ra8 {Trying to eliminate the pesky a-pawn.} ({The threat is now} 23... Z0 24.
b5 Z0 25. bxc6 bxc6 {And now the king on e7 is sorely exposed, for example
after} 26. Re1+ Kd6 27. Qg3+ Kd7 28. Rb1 {With threats of Rb7 and Rb8 - Black
can't really survive here.}) (23... Nxb4 {Capturing the pawn on b4 is not a
relief as it opens up the b-file which White can exploit with} 24. Rb1 Rxd4 25.
Qg3 {When a3 and Qc7 are deadly threats and Black can't survive this - once
again due to the exposed nature of the king on e7.}) 24. Re1+ Kd6 25. b5 {
The point behind playing b4 earlier. Now this pawn is threatening to take on
c6 or to land on b6, in either case with decisive effect.} Rxa7 {A final
blunder in a lost position.} ({It was probably better to try to bring the
other rook into the game, although now we can see another point behind the
advance of the pawn:} 25... Rhd8 26. b6 Nxb6 27. Rb1 {And when the b7 pawn
falls, White's position will be easily won.}) (25... cxb5 {Loses to} 26. Qe6+ {
As now also the defence of the knight is undermined.}) 26. Re6+ Kc7 27. Rxf6 {
[%cal Rg4g7] And due to the threat of Qxg7, Portisch decided to resign. A
tremendous attack and vintage Tal - initiative at all costs. I should probably
add that Tal went on to defeat Portisch convincingly in the quarter-final -
then also Larsen in the semi-final after finally losing to Spassky in the
final match, thus confirming that his 1960 World Championship run was more
than just a fluke.} 1-0

[Event "Alekhine Memorial"]
[Site "Moscow URS"]
[Date "1975.10.??"]
[Round "8"]
[White "Mikhail Tal"]
[Black "Michael Francis Stean"]
[Result "1-0"]
[ECO "D34"]
[Annotator "USER"]
[PlyCount "61"]
[EventDate "1975.??.??"]

{In his later years, despite constantly battling with severe health problems,
Tal continued playing on a very high level. True, he never again really
achieved notable success in the World Championship Cycle, but he was the
regular participant in the elite tournaments and at some point even the holder
of the longest undefeated streak of games (not something you would immediately
associate with his style). --- Every now and then, of course, he would stun
the chess world with one of his magical combinations - and I have decided to
wrap up this article with two games from his "later" years. --- The first game
we are going to examine is his game against English Grandmaster Michael Stean
played at the Alekhine Memorial in Moscow in 1975. It wasn't one of Tal's most
successful tournaments, but the following gem is arguably worth more than any
tournament prize.} 1. Nf3 {A rare occurrence for Tal - opening with the Reti
was not something he did every day} Nf6 2. c4 c5 {But the game very quickly
transposes to the English opening...} 3. Nc3 e6 4. g3 d5 5. cxd5 exd5 6. d4 Nc6
7. Bg2 Be7 8. O-O O-O 9. Bg5 {...and then to one of the main variations of the
Tarrasch Defence. This opening used to be very popular in the past (Kasparov
famously used it with great effect in his own path to the World Championship
Match), although nowadays it is not seen that often at the top level due to
the strategic risk the isolated pawn involves (and due to the fact more
reliable neutralizing options are available at Black's disposal). --- Still,
it is a very reputable opening and especially popular at club level, so it is
not a bad thing to see a game or two Model games in it if you are a 1.d4
player.} cxd4 {To be honest, I always though this voluntary capture on d4 is
somewhat premature, but now I see it is the most commonly played move in this
position, so what do I exactly know.} 10. Nxd4 {Now we obtain a typical
position for the Tarrasch Defence, where Black has an isolated pawn but often
obtains reasonable dynamic chances in return.} h6 11. Be3 Re8 12. Qb3 {This
move increases the pressure on the d5 pawn and basically forces Black's next
move. I am not 100% sure if it is beneficial to bring the knight closer to the
juicy c4 square, even if this is the 2nd most common move in this position 
(have I mentioned I don't know that much at all about the Tarrasch Defence)?}
Na5 13. Qc2 {[%cal Gc2f5] I guess one of the ideas behind having the queen on
c2 is to be able to jump to f5 with the knight.} Bg4 {Another very typical
Tarrasch Defence move, pressuring the potentially weak e2 square and
activating the light -squared bishop.} 14. h3 {[%cal Rh3g4] Immediately posing
a question to the bishop.} Bd7 {The bishop is a bit passive here and it blocks
the queen's communication with the d5 pawn so it can be labeled as an
inaccuracy.} (14... Bh5 {It was probably better to try and get the bishop on
g6 to harrass the queen on c2, even if after} 15. g4 Bg6 16. Nf5 {It is not
such an easy task to get rid of the knight for the moment. Still, the computer
insists the bishop will be more useful here in the long run - and it is also
the main move on the master level these days.}) 15. Rad1 {Bringing the pieces
in play and planning to siege the isolated pawn.} Rc8 16. Nf5 Bf8 17. Bxd5 {
Finally, the isolated pawn falls, but this is not the end of the world as
Black still has a lot of activity, potentially.} Re5 $2 {[%cal Re5f5,Re5d5]
But this move, naively hoping to win a piece by the means of a double attack,
is a serious mistake as it overlooks a relatively basic tactic available at
White's disposal.} 18. Nxh6+ {[%cal Ra2g8,Gc2g6] An "obvious" piece sacrifice,
intending to use the pin on the a2-g8 diagonal to the maximum effect. Qg6 is
coming next.} gxh6 19. Qg6+ {[%cal Rg6f7,Rd5f7] The point of the combination
was to utilize the pin to infiltrate with the queen and collect the f7 pawn as
well.} Kh8 20. Bxf7 {Now h6 is also weak and Black should be dead lost,
objectively, although quite a few adventures lie in front of us.} Rc6 {[%cal
Gc6h6] Trying to cover the 6th rank laterally.} 21. Rd5 $2 {But this is a bit
too flashy. Tal overlooks a very powerful defensive resources available to
Black in this position.} (21. Bxh6 {First of all, this simple capture on h6
was more than sufficient. After} Bxh6 22. Qxh6+ Nh7 23. Qf4 {White has four (!)
pawns for the piece, the pin on the d-file is annoying and the opponent's king
is laid bare, so it is not at all surprising that White is completely winning.}
) (21. Bf4 {This attack on the rook was a more sophisticated approach. The
idea is to jump with the knight on d5 next after} Re7 22. Nd5 {When White has
a won position as the knight can't move - similarly as in the game.}) (21. Nd5
{Jumping with the knight was also possible, but it doesn't come with the tempo
(attack on the rook on d5).}) 21... Qe7 $2 {Returning the favour, although it
is not surprising that Black goes wrong in such a complicated and dangerous
position. Also, it is very understandable that Black wanted to sidestep the
potential pin on the d-file.} (21... Rxe3 {It was paramount to eliminate the
strong dark-squared bishop that will cause so much trouble in the actual game.
After} 22. fxe3 Bg7 {Black is very solid and the outcome of the game will be
completely unclear.}) (21... Re7 {Trying to remove the attacked rook on e5,
was also more resillient, although here the pin via} 22. Rfd1 {Is very strong
- not to mention the hanging pawn on h6.}) (21... Nxd5 {The rook is, of course,
immune, due to the mating threat on g8.} 22. Qg8# {This motif will be the
central tactical motif in the incoming tactical melee.}) 22. Bd4 {[%cal Rd4h8]
Now everything is hanging on the long diagonal and Black doesn't have time to
place the bishop on g7 - the rook on e5 is hanging!} Nc4 {[%cal Gc4e5] Trying
desperately to reinforce the e5 point.} 23. f4 {A cold shower and the only
clearly winning move.} Bg7 {Nothing else works - the rook can't move because
of the previously seen mating threat on g8. Black is forced to give up the
extra material and end up in a totally lost position.} 24. Bxe5 Nxe5 25. Rxe5
Qf8 26. Bb3 {Now White is an exchange and three pawns up, so the conversion
isn't particularly difficult.} Ng4 27. Qd3 Nxe5 28. fxe5 {Okay, sorry, only
three pawns up as Black has just regained the exchange - but the outcome is
never in doubt all the same.} Qc5+ 29. Kh2 Be8 30. e6 Rd6 31. Qe4 {And here
Stean finally decided to throw in the towel. A powerful, very convincing
victory (despite the slight error on move 21 ) that was mainly the result of
suspicious opening play by his opponent.} 1-0

[Event "Reykjavik"]
[Site "Reykjavik ISL"]
[Date "1987.02.20"]
[Round "2"]
[White "Mikhail Tal"]
[Black "Johann Hjartarson"]
[Result "1-0"]
[ECO "C99"]
[Annotator "USER"]
[PlyCount "87"]
[EventDate "1987.??.??"]

{Last but not least, let's take a look at a famous and celebrated game that
Tal played in his later years. It was played in Reykjavik in 1987 and Tal's
opponent was well-known Icelandic grandmaster Johann Hjartarson.} 1. e4 {
Back to old loves in the old age?} e5 2. Nf3 Nc6 3. Bb5 {As Kasparov wrote
somewhere - "The ability to handle different structures that result from the
Ruy Lopez is what determins the class of a certain player". It is no wonder
most World Champions played the Ruy with at least one colour - and Tal was no
exception.} a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O 8. c3 d6 9. h3 Na5 {
The Chigorin variation of the Closed Ruy Lopez is one of the oldest systems at
Black's disposal in this complex opening that has been played on all levels
for more than 100 years. These days, it is not the most frequent guest at the
highest level as there are other, more reliable systems available to Black,
but for average patzers like you and me, there is a very high probability we
are going to encounter it sooner or later if we play 1.e4, 2.Nf3, 3.Bb5 and 4.
Ba4.} 10. Bc2 c5 11. d4 Qc7 12. Nbd2 {This is the old way of handling this
variation.} (12. d5 {These days, under the influence of the modern engines,
people have started realizing more and more that closing the center in all of
these closed systems of the Ruy Lopez is actually a very legitimate - maybe
even the most critical - way of fighting for the opening advantage.}) 12... Bd7
{One of the numerous possibilities at Black's disposal in this system.} 13. Nf1
cxd4 14. cxd4 Rac8 15. Ne3 {[%cal Ge3c4,Ge3f5,Ge3d5,Ge3c2] The knight is very
agile on e3, covering the important c4 square, defending the bishop on c2 and
potentially eyeing the d5 and f5 squares.} Nc6 {A typical Chigorin maneuver.
The knight puts pressure on the d4 pawn and intends to go to b4 after White
closes the center, in order to harass the bishop on c2.} 16. d5 Nb4 17. Bb1 a5
{[%csl Gc5][%cal Gb4a6,Gb5b4,Ga6c5] One of the ideas behind Black's setup is
this queenside expansion. They want to get the moves a5-b4 and then securely
land the knight on c5.} 18. a3 Na6 19. b4 {A very nice tactical way of
preventing Black from executing this plan. Remember this idea of playing b4 in
this type of structure as it happens very often in the Ruy.} g6 {This move is
a common idea in different Ruy Lopez structures. Sometimes, it leads to the
fianchetto of the bishop via f8-g7 route, but sometimes the knight can also
appear on this square.} (19... axb4 20. axb4 Nxb4 {Is bad as after} 21. Bd2 {
It transpires that the knight is actually trapped. A pattern worth knowing!})
20. Bd2 {Now White obtains a very typical advantage in this type of variation
because he has a big space advantage and the knight on a6 is completely out of
the game. However, Black's position is very sturdy and solid and it takes a
great player to outmaneuver and outplay Black from a position as this.} axb4 {
White was potentially threatening to take on a5, so Black avoids this option,
even though it does open the a-file.} 21. axb4 Qb7 22. Bd3 {[%csl Rb5] Another
feature of this position is the weakness of the b5 pawn which White can
utilize when maneuvering the pieces.} Nc7 {[%csl Gb5][%cal Gc7b5,Gc7e8,Ge8g7]
Adding some protection to the b5 square and maybe - just maybe - hinting at
the potential Ne8-Ng7 route?} 23. Nc2 {The knight on e3 has finally done its
job and now it moves out of the way to free the bishop on d2 to seek a more
promising role.} Nh5 {[%cal Gh5f4,Gf7f5] Black has to create counterplay on
the kingside - either with the Nf4 knight jump or with the f5 pawn push.} 24.
Be3 {White decides to ignore it and threaten Ra7 for now, although it is not
100% clear whether the bishop is better placed on e3 or d2 (given that on e3
it can be hit with the f-pawn). There are other alternatives, but the
character of the position remains the same nevertheless.} Ra8 25. Qd2 Rxa1 {
It is logical for Black to try and exchange some pieces when they have less
space.} 26. Nxa1 {An unconventional decision (how many of us would
automatically recapture with the rook)? But White wants to bring the knight to
b3 square and then potentially eye the a5 or even the c5 square (spoiler alert)
.} f5 {[%cal Gf5f4] Finally Black initiaties counterplay at the moment when
our queen is locking the bishop and when f4 is actually a threat.} 27. Bh6 {
[%cal Rh6f8] Placing the bishop outside of the chain and avoiding the threat.}
Ng7 $2 {But this move is actually very passive and totally misguided. The
knight was very decent on h5 and it was absolutely not necessary to move it.
Hjartarson was maybe considering a kingside attack with f4 and so on, but this
is a wrong idea in this position.} 28. Nb3 f4 {Closing down the position, in
my opinion, only helps White as now the counterplay on the kingside is not
happening any time soon and it is unrealistic to expect any sort of King's
Indian pawn storm with g5-g4 given the current positioning of the pieces.} 29.
Na5 Qb6 30. Rc1 Ra8 31. Qc2 {[%csl Rc6] White treis to increase the pressure
on the queenside and bring the pieces closer. The c6 square is looking quite
juicy.} Nce8 32. Qb3 Bf6 33. Nc6 Nh5 {Now the knight arrives back - but where
is it going now that the f4 square has been covered?} 34. Qb2 Bg7 {Maybe
Hjartarson was hoping to get the pawn chain going with g5-g4 and so on, but it
is way too slow.} 35. Bxg7 Kxg7 {The culminating moment of this entire game!}
36. Rc5 $3 {A wonderful move, that is not only spectacular, but also very
strong! The idea is very simple - either the pawn on b5 falls - or the pawn on
d6 is diverted from the defence of the e5 pawn. One of those rare cases where
Tal's sacrifice was very positionally founded - and very correct :).} Qa6 (
36... dxc5 {The rook can't be accepted as after} 37. Nfxe5 {A deadly
discovered check is threatened, the bishop on d7 falls and the attack on
dark-squares will rage. For example, after} (37. Ncxe5 {It is slightly more
precise to include the f-knight, although this capture also works, even though
it allows} Qf6 {Here the prozaic} 38. bxc5 {Is sufficient, although it is
clear that the other capture is even stronger.}) 37... Qa6 38. Nxd7+ Nhf6 {
White can simply go for the endgame with} 39. Nxc5 Qa1+ 40. Qxa1 Rxa1+ 41. Kh2
{As White has two pawns for the exchange already, the b5 pawn is falling and
all White's pieces are perfectly placed, protecting e4,b4, d5 and so on.}) 37.
Rxb5 {And now the pawn falls and White obtains a strong passed b-pawn.} Nc7 $2
{A final mistake in a lost position.} (37... Bxc6 {For better or for worse,
Black should have snatched on c6, although after} 38. dxc6 Qxc6 39. Ra5 {
The position remains lost - the b-pawn is too strong. But at least the game
doesn't end at once.}) 38. Rb8 {[%cal Rd3a6] Now White simplifies into a much
more winning endgame with the help of another very spectacular sacrifice.
First, a simple discovered attack on the queen.} Qxd3 39. Ncxe5 {A tremendous
blow at the most fortified point - once again utilizing the weakness of the
dark-squares around the black king.} Qd1+ 40. Kh2 Ra1 {Threatening mate on the
spot and at least forcing accuraccy to the very end.} (40... dxe5 {Leads to a
mate by force after} 41. Qxe5+ Nf6 42. Qe7+ Kh6 {There is no way Black can
survive here with such a king.} 43. Rxa8 Nxa8 44. Qf8+ Kh5 45. Qxf6) 41. Ng4+
Kf7 42. Nh6+ Ke7 43. Ng8+ {And here Hjartarson resigned not waiting for} Kf7
44. Ng5# {Although he might have as well allowed mate here to honor Tal's
brilliant play. A fascinating game and one of the rare examples where Tal's
combinations had a strictly positional foundation. --- On the other hand,
apart from the splendid combination, I also found Tal's handling of a typical
Spanish middlegame extremely instructive. We often admire his combinations and
tend to forget he was also a very well-rounded player with above average
positional understanding.} 1-0
`

// First puzzle in lichess "Open Database" (see https://database.lichess.org/#puzzles)
// ```csv
// PuzzleId,FEN,Moves,Rating,RatingDeviation,Popularity,NbPlays,Themes,GameUrl,OpeningTags
// 00008,r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24,f2g3 e6e7 b2b1 b3c1 b1c1 h6c1,1974,76,94,6337,crushing hangingPiece long middlegame,https://lichess.org/787zsVup/black#47,
// ```
export const EXAMPLE_NIP64_PGN2 = `[Event "Puzzle 00008"]
[Site "https://lichess.org/787zsVup/black#47"]
[Date "????.??.??"]
[Round "-"]
[White "?"]
[Black "?"]
[Result "*"]
[FEN "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24"]

*`
