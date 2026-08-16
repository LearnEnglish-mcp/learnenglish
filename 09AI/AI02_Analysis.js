// ===== AI02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Chat AI is helpful for students because it can explain lessons in a simple way.",
    "structure": "S + linking verb + adjective complement + because-clause",
    "grammar": "Dùng because để giải thích lý do.",
    "translation": "Chat AI hữu ích cho học sinh vì nó có thể giải thích bài học theo cách đơn giản.",
    "function": "Chat AI (chủ ngữ); is (động từ liên kết); helpful for students (bổ ngữ); because it can explain lessons in a simple way (mệnh đề chỉ nguyên nhân).",
    "pos": "Chat (noun); AI (noun); is (linking verb); helpful (adjective); for (preposition); students (noun); because (conjunction); it (pronoun); can (modal verb); explain (verb); lessons (noun); in (preposition); a (article); simple (adjective); way (noun).",
    "note": ""
  },
  {
    "sentence": "When students do not understand a topic, they can ask Chat AI for examples, summaries, or practice questions.",
    "structure": "When-clause + main clause",
    "grammar": "Dùng when để nói điều xảy ra khi một tình huống xuất hiện.",
    "translation": "Khi học sinh không hiểu một chủ đề, các em có thể hỏi Chat AI để lấy ví dụ, bản tóm tắt hoặc câu hỏi luyện tập.",
    "function": "When students do not understand a topic (mệnh đề phụ chỉ thời điểm/tình huống); they (chủ ngữ mệnh đề chính); can ask Chat AI (vị ngữ); for examples, summaries, or practice questions (cụm giới từ chỉ nội dung yêu cầu).",
    "pos": "When (conjunction); students (noun); do (auxiliary verb); not (adverb); understand (verb); a (article); topic (noun); they (pronoun); can (modal verb); ask (verb); Chat (noun); AI (noun); for (preposition); examples (noun); summaries (noun); or (conjunction); practice (noun); questions (noun).",
    "note": ""
  },
  {
    "sentence": "This makes learning faster and more interesting.",
    "structure": "S + V + O + adjective complements",
    "grammar": "Dùng make + tân ngữ + tính từ để diễn tả làm cho điều gì trở nên thế nào.",
    "translation": "Điều này làm cho việc học nhanh hơn và thú vị hơn.",
    "function": "This (chủ ngữ); makes (động từ); learning (tân ngữ); faster and more interesting (bổ ngữ tính từ cho learning).",
    "pos": "This (determiner); makes (verb); learning (noun); faster (adjective); and (conjunction); more (adverb); interesting (adjective).",
    "note": ""
  },
  {
    "sentence": "Students can use Chat AI to prepare presentations, check grammar, improve writing, and review before exams.",
    "structure": "S + can + use + O + to-infinitive series",
    "grammar": "Dùng cấu trúc này để nói dùng công cụ nhằm thực hiện một mục đích.",
    "translation": "Học sinh có thể dùng Chat AI để chuẩn bị bài thuyết trình, kiểm tra ngữ pháp, cải thiện bài viết và ôn tập trước kỳ thi.",
    "function": "Students (chủ ngữ); can use (động từ); Chat AI (tân ngữ); to prepare presentations, check grammar, improve writing, and review before exams (cụm chỉ mục đích).",
    "pos": "Students (noun); can (modal verb); use (verb); Chat (noun); AI (noun); to (infinitive marker); prepare (verb); presentations (noun); check (verb); grammar (noun); improve (verb); writing (noun); and (conjunction); review (verb); before (preposition); exams (noun).",
    "note": ""
  },
  {
    "sentence": "However, students should not copy answers without thinking.",
    "structure": "Linking adverb + S + should not + V + O + without-gerund",
    "grammar": "Dùng should not để khuyên không làm việc gì và without + V-ing để nói thiếu một hành động.",
    "translation": "Tuy nhiên, học sinh không nên sao chép câu trả lời mà không suy nghĩ.",
    "function": "However (trạng từ liên kết); students (chủ ngữ); should not copy (cụm động từ phủ định); answers (tân ngữ); without thinking (cụm giới từ với V-ing).",
    "pos": "However (adverb); students (noun); should (modal verb); not (adverb); copy (verb); answers (noun); without (preposition); thinking (noun).",
    "note": ""
  },
  {
    "sentence": "Chat AI is becoming popular in many workplaces.",
    "structure": "S + present continuous + adjective complement + prepositional phrase",
    "grammar": "Dùng hiện tại tiếp diễn để nói một xu hướng đang phát triển.",
    "translation": "Chat AI đang trở nên phổ biến tại nhiều nơi làm việc.",
    "function": "Chat AI (chủ ngữ); is becoming (động từ hiện tại tiếp diễn); popular (bổ ngữ tính từ); in many workplaces (cụm giới từ chỉ nơi chốn).",
    "pos": "Chat (noun); AI (noun); is (auxiliary verb); becoming (verb); popular (adjective); in (preposition); many (determiner); workplaces (noun).",
    "note": ""
  },
  {
    "sentence": "Important decisions should still be checked by humans.",
    "structure": "S + should + adverb + passive verb + by-agent",
    "grammar": "Dùng should ở dạng bị động để nói điều nên được thực hiện.",
    "translation": "Các quyết định quan trọng vẫn nên được con người kiểm tra.",
    "function": "Important decisions (chủ ngữ); should still be checked (cụm động từ bị động); by humans (cụm giới từ chỉ tác nhân).",
    "pos": "Important (adjective); decisions (noun); should (modal verb); still (adverb); be (auxiliary verb); checked (verb); by (preposition); humans (noun).",
    "note": ""
  },
  {
    "sentence": "It can write social media posts, short stories, advertisements, video scripts, study notes, and product descriptions.",
    "structure": "S + can + V + coordinated objects",
    "grammar": "Dùng can với một động từ và nhiều tân ngữ để liệt kê những nội dung có thể tạo.",
    "translation": "Nó có thể viết bài đăng mạng xã hội, truyện ngắn, quảng cáo, kịch bản video, ghi chú học tập và mô tả sản phẩm.",
    "function": "It (chủ ngữ); can write (động từ khuyết thiếu và động từ chính); social media posts, short stories, advertisements, video scripts, study notes, and product descriptions (các tân ngữ song song).",
    "pos": "It (pronoun); can (modal verb); write (verb); social (adjective); media (noun); posts (noun); short (adjective); stories (noun); advertisements (noun); video (noun); scripts (noun); study (noun); notes (noun); and (conjunction); product (noun); descriptions (noun).",
    "note": ""
  },
  {
    "sentence": "They can ask it to make content more interesting, shorter, longer, simpler, or more professional.",
    "structure": "S + can + ask + O + to-infinitive + object complement",
    "grammar": "Dùng ask + tân ngữ + to-infinitive để yêu cầu ai hoặc công cụ làm gì.",
    "translation": "Họ có thể yêu cầu nó làm cho nội dung thú vị hơn, ngắn hơn, dài hơn, đơn giản hơn hoặc chuyên nghiệp hơn.",
    "function": "They (chủ ngữ); can ask (động từ); it (tân ngữ); to make content (cụm to-infinitive); more interesting, shorter, longer, simpler, or more professional (các bổ ngữ tính từ).",
    "pos": "They (pronoun); can (modal verb); ask (verb); it (pronoun); to (infinitive marker); make (verb); content (noun); more (adverb); interesting (adjective); shorter (adjective); longer (adjective); simpler (adjective); or (conjunction); more (adverb); professional (adjective).",
    "note": ""
  },
  {
    "sentence": "The best content comes from combining AI support with personal ideas.",
    "structure": "Superlative noun phrase + V + gerund phrase",
    "grammar": "Dùng so sánh nhất và come from + V-ing để nói nguồn gốc của kết quả tốt nhất.",
    "translation": "Nội dung tốt nhất đến từ việc kết hợp sự hỗ trợ của AI với ý tưởng cá nhân.",
    "function": "The best content (chủ ngữ); comes from (động từ và giới từ); combining AI support with personal ideas (cụm V-ing làm bổ ngữ cho from).",
    "pos": "The (article); best (adjective); content (noun); comes (verb); from (preposition); combining (gerund); AI (noun); support (noun); with (preposition); personal (adjective); ideas (noun).",
    "note": ""
  }
];
