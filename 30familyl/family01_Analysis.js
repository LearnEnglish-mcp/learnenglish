const newAnalysisData = [
  {
    "sentence": "My family has four people: my father, my mother, my younger sister, and me.",
    "structure": "S + have/has + O",
    "grammar": "Dùng hiện tại đơn với have/has để nói sở hữu hoặc thành phần.",
    "translation": "Gia đình tôi có bốn người: cha tôi, mẹ tôi, em gái tôi và tôi.",
    "function": "My family (chủ ngữ); has (động từ chính); four people (tân ngữ); my father, my mother, my younger sister, and me (cụm liệt kê giải thích four people).",
    "pos": "My (possessive determiner); family (noun); has (verb); four (number); people (noun); my (possessive determiner); father (noun); my (possessive determiner); mother (noun); my (possessive determiner); younger (adjective); sister (noun); and (conjunction); me (pronoun).",
    "note": ""
  },
  {
    "sentence": "We live in a small but comfortable house in the city.",
    "structure": "Clause + but + clause",
    "grammar": "Dùng but để nối hai ý tương phản.",
    "translation": "Chúng tôi sống trong một ngôi nhà nhỏ nhưng thoải mái ở thành phố.",
    "function": "We (chủ ngữ); live (động từ chính); in a small but comfortable house (cụm giới từ chỉ nơi chốn); in the city (cụm giới từ chỉ vị trí).",
    "pos": "We (pronoun); live (verb); in (preposition); a (article); small (adjective); but (conjunction); comfortable (adjective); house (noun); in (preposition); the (article); city (noun).",
    "note": ""
  },
  {
    "sentence": "My family is very important to me because they always care about me and help me in difficult times.",
    "structure": "Main clause + because + clause",
    "grammar": "Dùng because để nêu nguyên nhân.",
    "translation": "Gia đình rất quan trọng với tôi vì họ luôn quan tâm và giúp đỡ tôi trong những lúc khó khăn.",
    "function": "My family (chủ ngữ); is very important to me (mệnh đề chính); because they always care about me and help me in difficult times (mệnh đề nguyên nhân).",
    "pos": "My (possessive determiner); family (noun); is (linking/auxiliary verb); very (adverb); important (adjective); to (preposition); me (pronoun); because (conjunction); they (pronoun); always (adverb); care (noun); about (preposition); me (pronoun); and (conjunction); help (verb); me (pronoun); in (preposition); difficult (adjective); times (noun).",
    "note": ""
  },
  {
    "sentence": "My father works in an office, and my mother is a teacher.",
    "structure": "S + V-s/es + complement",
    "grammar": "Dùng hiện tại đơn với ngôi thứ ba số ít.",
    "translation": "Cha tôi làm việc trong một văn phòng, còn mẹ tôi là giáo viên.",
    "function": "My father (chủ ngữ mệnh đề một); works in an office (vị ngữ); and my mother (chủ ngữ mệnh đề hai); is a teacher (vị ngữ).",
    "pos": "My (possessive determiner); father (noun); works (verb); in (preposition); an (article); office (noun); and (conjunction); my (possessive determiner); mother (noun); is (linking/auxiliary verb); a (article); teacher (noun).",
    "note": ""
  },
  {
    "sentence": "My sister is a student and enjoys drawing pictures.",
    "structure": "S + enjoy(s) + V-ing",
    "grammar": "Dùng enjoy + V-ing để nói thích làm một hoạt động.",
    "translation": "Em gái tôi là học sinh và thích vẽ tranh.",
    "function": "My sister (chủ ngữ); is a student (vị ngữ thứ nhất); and enjoys drawing pictures (vị ngữ thứ hai).",
    "pos": "My (possessive determiner); sister (noun); is (linking/auxiliary verb); a (article); student (noun); and (conjunction); enjoys (verb); drawing (gerund/present participle); pictures (noun).",
    "note": ""
  },
  {
    "sentence": "In the evening, we usually have dinner together and talk about our day.",
    "structure": "S + usually + V",
    "grammar": "Dùng trạng từ tần suất usually với hiện tại đơn.",
    "translation": "Buổi tối, chúng tôi thường ăn tối cùng nhau và trò chuyện về một ngày của mình.",
    "function": "In the evening (trạng ngữ thời gian); we (chủ ngữ); usually have dinner together and talk about our day (hai vị ngữ song song).",
    "pos": "In (preposition); the (article); evening (gerund/present participle); we (pronoun); usually (adverb); have (verb); dinner (noun); together (adverb); and (conjunction); talk (verb); about (preposition); our (possessive determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "My favorite hobby is listening to music because it helps me relax and feel happy after studying.",
    "structure": "possessive + favorite + noun + be + ...",
    "grammar": "Dùng favorite để nói sở thích yêu thích nhất.",
    "translation": "Sở thích yêu thích nhất của tôi là nghe nhạc vì nó giúp tôi thư giãn và cảm thấy vui sau khi học.",
    "function": "My favorite hobby (chủ ngữ); is listening to music (bổ ngữ); because it helps me relax and feel happy after studying (mệnh đề nguyên nhân).",
    "pos": "My (possessive determiner); favorite (adjective); hobby (noun); is (linking/auxiliary verb); listening (gerund/present participle); to (preposition); music (noun); because (conjunction); it (pronoun); helps (verb); me (pronoun); relax (verb); and (conjunction); feel (verb); happy (adjective); after (preposition); studying (gerund/present participle).",
    "note": ""
  },
  {
    "sentence": "Besides that, I like playing badminton with my friends in the afternoon.",
    "structure": "S + like + V-ing",
    "grammar": "Dùng like + V-ing để nói sở thích.",
    "translation": "Ngoài ra, tôi thích chơi cầu lông với bạn bè vào buổi chiều.",
    "function": "Besides that (cụm chuyển ý); I (chủ ngữ); like playing badminton (động từ + cụm V-ing); with my friends (cụm chỉ người cùng tham gia); in the afternoon (trạng ngữ thời gian).",
    "pos": "Besides (preposition/adverb); that (conjunction); I (pronoun); like (verb); playing (gerund/present participle); badminton (noun); with (preposition); my (possessive determiner); friends (noun); in (preposition); the (article); afternoon (noun).",
    "note": ""
  },
  {
    "sentence": "Whenever I do not understand my homework, he explains it to me patiently.",
    "structure": "Whenever + clause, main clause",
    "grammar": "Dùng whenever để nói bất cứ khi nào một tình huống xảy ra.",
    "translation": "Bất cứ khi nào tôi không hiểu bài tập về nhà, bạn ấy kiên nhẫn giải thích cho tôi.",
    "function": "Whenever I do not understand my homework (mệnh đề phụ thời gian); he (chủ ngữ mệnh đề chính); explains it to me patiently (vị ngữ).",
    "pos": "Whenever (conjunction); I (pronoun); do (verb); not (adverb); understand (verb); my (possessive determiner); homework (noun); he (pronoun); explains (verb); it (pronoun); to (preposition); me (pronoun); patiently (adverb).",
    "note": ""
  },
  {
    "sentence": "Thanks to his help, my grades have improved a lot this year.",
    "structure": "S + have/has + V3",
    "grammar": "Dùng hiện tại hoàn thành để nói kết quả liên quan đến hiện tại.",
    "translation": "Nhờ sự giúp đỡ của bạn ấy, điểm số của tôi đã cải thiện rất nhiều trong năm nay.",
    "function": "Thanks to his help (cụm chỉ nguyên nhân); my grades (chủ ngữ); have improved (hiện tại hoàn thành); a lot (trạng từ mức độ); this year (trạng ngữ thời gian).",
    "pos": "Thanks (noun); to (preposition); his (possessive determiner); help (verb); my (possessive determiner); grades (noun); have (verb); improved (past participle/verb); a (article); lot (noun); this (determiner); year (noun).",
    "note": ""
  }
];
