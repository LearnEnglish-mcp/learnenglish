// ===== routine03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Helping my family is a good habit that I practice every day.",
    "structure": "V-ing phrase + be + complement",
    "grammar": "Dùng cụm V-ing làm chủ ngữ.",
    "translation": "Giúp đỡ gia đình là một thói quen tốt mà tôi thực hiện mỗi ngày.",
    "function": "Helping my family (cụm V-ing làm chủ ngữ); is a good habit that I practice every day. (vị ngữ nêu đặc điểm hoặc tác dụng).",
    "pos": "Helping (gerund/present participle); my (pronoun); family (noun); is (linking/auxiliary verb); a (article); good (adjective); habit (noun); that (pronoun); I (pronoun); practice (verb); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "When my parents are busy, I help prepare simple food or look after our home.",
    "structure": "When + S + V, S + V",
    "grammar": "Dùng when để chỉ tình huống hoặc thời điểm.",
    "translation": "Khi bố mẹ bận, tôi giúp chuẩn bị món ăn đơn giản hoặc trông nom nhà cửa.",
    "function": "When my parents are busy (cụm/mệnh đề trạng ngữ mở đầu); I help prepare simple food or look after our home. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "When (conjunction); my (pronoun); parents (noun); are (linking/auxiliary verb); busy (adjective); I (pronoun); help (verb); prepare (verb); simple (adjective); food (noun); or (conjunction); look (verb); after (preposition); our (pronoun); home (noun).",
    "note": ""
  },
  {
    "sentence": "Small actions can make home life easier, happier, and more comfortable for everyone.",
    "structure": "S + can + make + O + adjective",
    "grammar": "Dùng can + make + tân ngữ + tính từ để nói khả năng tạo ra một trạng thái.",
    "translation": "Những hành động nhỏ có thể khiến cuộc sống gia đình dễ dàng, vui vẻ và thoải mái hơn cho mọi người.",
    "function": "Small (chủ ngữ); actions can make home life easier happier and more comfortable for everyone (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "Small (adjective); actions (noun); can (modal verb); make (verb); home (noun); life (noun); easier (adjective); happier (adjective); and (conjunction); more (adverb); comfortable (adjective); for (preposition); everyone (pronoun).",
    "note": ""
  },
  {
    "sentence": "However, spending too much time on screens can make me tired.",
    "structure": "However, + clause",
    "grammar": "Dùng However để nối với ý trước và thể hiện sự tương phản.",
    "translation": "Tuy nhiên, dành quá nhiều thời gian trước màn hình có thể khiến tôi mệt.",
    "function": "However spending too much time on (chủ ngữ); screens can make me tired (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "However (adverb); spending (gerund/present participle); too (adverb); much (determiner); time (noun); on (preposition); screens (noun); can (modal verb); make (verb); me (pronoun); tired (adjective).",
    "note": ""
  },
  {
    "sentence": "I finish important homework before watching videos or playing games.",
    "structure": "S + V + O + before + V-ing",
    "grammar": "Dùng before + V-ing để nói việc cần làm trước một hành động khác.",
    "translation": "Tôi hoàn thành bài tập quan trọng trước khi xem video hoặc chơi trò chơi.",
    "function": "I (chủ ngữ); finish important homework before watching videos or playing games (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); finish (verb); important (adjective); homework (noun); before (preposition); watching (gerund/present participle); videos (noun); or (conjunction); playing (gerund/present participle); games (noun).",
    "note": ""
  },
  {
    "sentence": "During meals, I keep my phone away.",
    "structure": "During + noun, S + V",
    "grammar": "Dùng during + danh từ để chỉ khoảng thời gian một hành động xảy ra.",
    "translation": "Trong bữa ăn, tôi để điện thoại ra xa.",
    "function": "During meals (cụm/mệnh đề trạng ngữ mở đầu); I keep my phone away. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "During (preposition); meals (noun); I (pronoun); keep (verb); my (pronoun); phone (noun); away (adverb).",
    "note": ""
  },
  {
    "sentence": "Instead, I read a book or talk with my family.",
    "structure": "Instead, + clause",
    "grammar": "Dùng Instead để giới thiệu một lựa chọn thay thế.",
    "translation": "Thay vào đó, tôi đọc sách hoặc nói chuyện với gia đình.",
    "function": "Instead I (chủ ngữ); read a book or talk with my family (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "Instead (adverb); I (pronoun); read (verb); a (article); book (noun); or (conjunction); talk (verb); with (preposition); my (pronoun); family (noun).",
    "note": ""
  },
  {
    "sentence": "If I cannot complete something, I move it to another suitable time.",
    "structure": "If + S + cannot + V, S + V",
    "grammar": "Dùng mệnh đề if để nêu tình huống và hành động xử lý tương ứng.",
    "translation": "Nếu không thể hoàn thành việc gì đó, tôi chuyển nó sang một thời điểm phù hợp khác.",
    "function": "If I cannot complete something (cụm/mệnh đề trạng ngữ mở đầu); I move it to another suitable time. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "If (conjunction); I (pronoun); cannot (modal verb); complete (verb); something (pronoun); I (pronoun); move (verb); it (pronoun); to (preposition/infinitive marker); another (determiner); suitable (adjective); time (noun).",
    "note": ""
  },
  {
    "sentence": "I do not always follow the plan perfectly, but it gives me direction and helps me become more organized.",
    "structure": "S + do not always + V",
    "grammar": "Dùng not always để nói một việc không xảy ra mọi lúc.",
    "translation": "Tôi không phải lúc nào cũng làm theo kế hoạch hoàn hảo, nhưng nó cho tôi định hướng và giúp tôi trở nên ngăn nắp hơn.",
    "function": "I (chủ ngữ); do not always follow the plan perfectly but it gives me direction and helps me become more organized (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); do (verb); not (adverb); always (adverb); follow (verb); the (article); plan (noun); perfectly (adverb); but (conjunction); it (pronoun); gives (verb); me (pronoun); direction (noun); and (conjunction); helps (verb); me (pronoun); become (verb); more (adverb); organized (adjective).",
    "note": ""
  },
  {
    "sentence": "Enough sleep helps my body rest and my mind work better.",
    "structure": "Enough + noun + V + O",
    "grammar": "Dùng enough trước danh từ để diễn tả số lượng hoặc mức độ đủ.",
    "translation": "Ngủ đủ giúp cơ thể tôi nghỉ ngơi và tâm trí hoạt động tốt hơn.",
    "function": "Enough (chủ ngữ); sleep helps my body rest and my mind work better (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "Enough (determiner); sleep (verb); helps (verb); my (pronoun); body (noun); rest (verb); and (conjunction); my (pronoun); mind (noun); work (verb); better (adverb).",
    "note": ""
  }
];
