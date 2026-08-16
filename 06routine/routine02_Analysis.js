// ===== routine02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Drinking enough water is an important habit in my daily life.",
    "structure": "V-ing phrase + be + complement",
    "grammar": "Dùng cụm V-ing làm chủ ngữ của câu.",
    "translation": "Uống đủ nước là một thói quen quan trọng trong cuộc sống hằng ngày của tôi.",
    "function": "Drinking enough water (cụm V-ing làm chủ ngữ); is an important habit in my daily life. (vị ngữ nêu đặc điểm hoặc tác dụng).",
    "pos": "Drinking (gerund/present participle); enough (determiner); water (noun); is (linking/auxiliary verb); an (article); important (adjective); habit (noun); in (preposition); my (pronoun); daily (adjective); life (noun).",
    "note": ""
  },
  {
    "sentence": "I drink a glass of water after waking up and carry a bottle with me.",
    "structure": "S + V + after + V-ing",
    "grammar": "Dùng after + V-ing để nói một hành động xảy ra sau hành động khác.",
    "translation": "Tôi uống một cốc nước sau khi thức dậy và mang theo một chai nước.",
    "function": "I (chủ ngữ); drink a glass of water after waking up and carry a bottle with me (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); drink (verb); a (article); glass (noun); of (preposition); water (noun); after (preposition); waking (gerund/present participle); up (adverb); and (conjunction); carry (verb); a (article); bottle (noun); with (preposition); me (pronoun).",
    "note": ""
  },
  {
    "sentence": "When the weather is hot, I drink more because I lose water through sweat.",
    "structure": "When + S + V, S + V",
    "grammar": "Dùng when để mở đầu mệnh đề chỉ thời gian hoặc tình huống.",
    "translation": "Khi thời tiết nóng, tôi uống nhiều hơn vì cơ thể mất nước qua mồ hôi.",
    "function": "When the weather is hot (cụm/mệnh đề trạng ngữ mở đầu); I drink more because I lose water through sweat. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "When (conjunction); the (article); weather (noun); is (linking/auxiliary verb); hot (adjective); I (pronoun); drink (verb); more (adverb); because (conjunction); I (pronoun); lose (verb); water (noun); through (preposition); sweat (noun).",
    "note": ""
  },
  {
    "sentence": "I choose clean water instead of sweet drinks most of the time.",
    "structure": "S + V + O + instead of + noun",
    "grammar": "Dùng instead of để nói sự lựa chọn thay thế.",
    "translation": "Hầu hết thời gian tôi chọn nước sạch thay vì đồ uống ngọt.",
    "function": "I (chủ ngữ); choose clean water instead of sweet drinks most of the time (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); choose (verb); clean (verb); water (noun); instead (adverb); of (preposition); sweet (adjective); drinks (verb); most (determiner); of (preposition); the (article); time (noun).",
    "note": ""
  },
  {
    "sentence": "To remember this habit, I put my bottle on my desk.",
    "structure": "To + V, S + V",
    "grammar": "Dùng to + động từ nguyên mẫu ở đầu câu để chỉ mục đích.",
    "translation": "Để nhớ thói quen này, tôi đặt chai nước trên bàn.",
    "function": "To (chủ ngữ); remember this habit I put my bottle on my desk (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "To (preposition/infinitive marker); remember (verb); this (pronoun); habit (noun); I (pronoun); put (verb); my (pronoun); bottle (noun); on (preposition); my (pronoun); desk (noun).",
    "note": ""
  },
  {
    "sentence": "I clean my room regularly because I like a neat and comfortable space.",
    "structure": "S + V + because + S + V",
    "grammar": "Dùng because để giải thích lý do.",
    "translation": "Tôi dọn phòng thường xuyên vì tôi thích một không gian ngăn nắp và thoải mái.",
    "function": "I (chủ ngữ); clean my room regularly because I like a neat and comfortable space (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); clean (verb); my (pronoun); room (noun); regularly (adverb); because (conjunction); I (pronoun); like (verb); a (article); neat (adjective); and (conjunction); comfortable (adjective); space (noun).",
    "note": ""
  },
  {
    "sentence": "A tidy room helps me find things quickly and study better.",
    "structure": "S + help(s) + O + V",
    "grammar": "Dùng help + tân ngữ + động từ nguyên mẫu không to.",
    "translation": "Một căn phòng gọn gàng giúp tôi tìm đồ nhanh và học tốt hơn.",
    "function": "A tidy room (chủ ngữ); helps me find things quickly and study better (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "A (article); tidy (adjective); room (noun); helps (verb); me (pronoun); find (verb); things (noun); quickly (adverb); and (conjunction); study (verb); better (adverb).",
    "note": ""
  },
  {
    "sentence": "Cleaning takes less time when I do a little each day, so I try not to be lazy.",
    "structure": "Clause, so + S + V",
    "grammar": "Dùng so để nối kết quả hoặc phản ứng với mệnh đề trước.",
    "translation": "Việc dọn dẹp tốn ít thời gian hơn khi tôi làm một chút mỗi ngày, vì vậy tôi cố gắng không lười biếng.",
    "function": "Cleaning (chủ ngữ); takes less time when I do a little each day so I try not to be lazy (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "Cleaning (gerund/present participle); takes (verb); less (adverb); time (noun); when (conjunction); I (pronoun); do (verb); a (article); little (determiner); each (determiner); day (noun); so (conjunction); I (pronoun); try (verb); not (adverb); to (preposition/infinitive marker); be (linking/auxiliary verb); lazy (adjective).",
    "note": ""
  },
  {
    "sentence": "I sometimes practice with classmates.",
    "structure": "S + sometimes + V",
    "grammar": "Dùng sometimes để nói một hành động thỉnh thoảng xảy ra.",
    "translation": "Đôi khi tôi luyện tập với bạn cùng lớp.",
    "function": "I (chủ ngữ); sometimes practice with classmates (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); sometimes (adverb); practice (verb); with (preposition); classmates (noun).",
    "note": ""
  },
  {
    "sentence": "A short practice every day is better than a long lesson once a month.",
    "structure": "S + be + better than + noun phrase",
    "grammar": "Dùng better than để so sánh hai cách hoặc lựa chọn.",
    "translation": "Luyện tập ngắn mỗi ngày tốt hơn một bài học dài mỗi tháng một lần.",
    "function": "A short (chủ ngữ); practice every day is better than a long lesson once a month (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "A (article); short (adjective); practice (verb); every (determiner); day (noun); is (linking/auxiliary verb); better (adverb); than (conjunction); a (article); long (adjective); lesson (noun); once (adverb); a (article); month (noun).",
    "note": ""
  }
];
