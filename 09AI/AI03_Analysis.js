// ===== AI03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "If the prompt is clear, the answer will usually be better.",
    "structure": "If-clause + main clause with will",
    "grammar": "Dùng câu điều kiện loại 1 cho một kết quả có thể xảy ra trong tương lai.",
    "translation": "Nếu câu lệnh rõ ràng, câu trả lời thường sẽ tốt hơn.",
    "function": "If the prompt is clear (mệnh đề điều kiện); the answer (chủ ngữ mệnh đề chính); will usually be (động từ tương lai với trạng từ); better (bổ ngữ so sánh hơn).",
    "pos": "If (conjunction); the (article); prompt (noun); is (linking verb); clear (adjective); the (article); answer (noun); will (modal verb); usually (adverb); be (linking verb); better (adjective).",
    "note": ""
  },
  {
    "sentence": "To write a good prompt, we should give enough details.",
    "structure": "Purpose infinitive phrase + main clause with should",
    "grammar": "Dùng to-infinitive đầu câu để nêu mục đích và should để đưa ra lời khuyên.",
    "translation": "Để viết một câu lệnh tốt, chúng ta nên cung cấp đủ chi tiết.",
    "function": "To write a good prompt (cụm to-infinitive chỉ mục đích); we (chủ ngữ); should give (động từ); enough details (tân ngữ).",
    "pos": "To (infinitive marker); write (verb); a (article); good (adjective); prompt (noun); we (pronoun); should (modal verb); give (verb); enough (determiner); details (noun).",
    "note": ""
  },
  {
    "sentence": "Instead of writing “Write about English,” we can write “Write a 100-word passage about learning English, using simple words.”",
    "structure": "Instead-of gerund phrase + main clause with can",
    "grammar": "Dùng instead of + V-ing để nói thay vì làm một việc thì làm việc khác.",
    "translation": "Thay vì viết “Viết về tiếng Anh”, chúng ta có thể viết “Hãy viết một đoạn văn 100 từ về việc học tiếng Anh, sử dụng từ ngữ đơn giản.”",
    "function": "Instead of writing “Write about English” (cụm giới từ với V-ing chỉ sự thay thế); we (chủ ngữ); can write (động từ); “Write a 100-word passage about learning English, using simple words” (tân ngữ là nội dung được viết).",
    "pos": "Instead (adverb); of (preposition); writing (gerund); Write (verb); about (preposition); English (proper noun); we (pronoun); can (modal verb); write (verb); Write (verb); a (article); 100-word (adjective); passage (noun); about (preposition); learning (gerund); English (proper noun); using (gerund); simple (adjective); words (noun).",
    "note": ""
  },
  {
    "sentence": "When the first answer is not perfect, we can ask Chat AI to rewrite, shorten, explain, or make it easier.",
    "structure": "When-clause + main clause + object + to-infinitive series",
    "grammar": "Dùng when để nêu tình huống và ask + object + to-infinitive để đưa ra yêu cầu.",
    "translation": "Khi câu trả lời đầu tiên chưa hoàn hảo, chúng ta có thể yêu cầu Chat AI viết lại, rút ngắn, giải thích hoặc làm cho nó dễ hơn.",
    "function": "When the first answer is not perfect (mệnh đề phụ); we (chủ ngữ); can ask (động từ); Chat AI (tân ngữ); to rewrite, shorten, explain, or make it easier (cụm to-infinitive với các động từ song song).",
    "pos": "When (conjunction); the (article); first (adjective); answer (noun); is (linking verb); not (adverb); perfect (adjective); we (pronoun); can (modal verb); ask (verb); Chat (noun); AI (noun); to (infinitive marker); rewrite (verb); shorten (verb); explain (verb); or (conjunction); make (verb); it (pronoun); easier (adjective).",
    "note": ""
  },
  {
    "sentence": "It is useful because people can use it anytime and anywhere.",
    "structure": "S + linking verb + adjective + because-clause",
    "grammar": "Dùng because để giải thích lý do một điều hữu ích.",
    "translation": "Nó hữu ích vì mọi người có thể sử dụng nó bất cứ lúc nào và ở bất cứ đâu.",
    "function": "It (chủ ngữ); is (động từ liên kết); useful (bổ ngữ tính từ); because people can use it anytime and anywhere (mệnh đề chỉ nguyên nhân).",
    "pos": "It (pronoun); is (linking verb); useful (adjective); because (conjunction); people (noun); can (modal verb); use (verb); it (pronoun); anytime (adverb); and (conjunction); anywhere (adverb).",
    "note": ""
  },
  {
    "sentence": "There are also privacy risks if people share personal or company information.",
    "structure": "There are + noun phrase + if-clause",
    "grammar": "Dùng there are để nói sự tồn tại và if để nêu điều kiện.",
    "translation": "Cũng có những rủi ro về quyền riêng tư nếu mọi người chia sẻ thông tin cá nhân hoặc thông tin công ty.",
    "function": "There (chủ ngữ giả); are (động từ); also (trạng từ); privacy risks (cụm danh từ); if people share personal or company information (mệnh đề điều kiện).",
    "pos": "There (adverb); are (linking verb); also (adverb); privacy (noun); risks (noun); if (conjunction); people (noun); share (verb); personal (adjective); or (conjunction); company (noun); information (noun).",
    "note": ""
  },
  {
    "sentence": "In healthcare, it can help explain general health information, but doctors must make final decisions.",
    "structure": "Prepositional phrase + clause + but + clause",
    "grammar": "Dùng help + động từ nguyên mẫu và must để diễn tả sự hỗ trợ cùng nghĩa vụ bắt buộc.",
    "translation": "Trong chăm sóc sức khỏe, nó có thể giúp giải thích thông tin sức khỏe nói chung, nhưng bác sĩ phải đưa ra quyết định cuối cùng.",
    "function": "In healthcare (cụm giới từ chỉ lĩnh vực); it (chủ ngữ); can help explain general health information (vị ngữ); but (liên từ); doctors (chủ ngữ mệnh đề hai); must make final decisions (vị ngữ).",
    "pos": "In (preposition); healthcare (noun); it (pronoun); can (modal verb); help (verb); explain (verb); general (adjective); health (noun); information (noun); but (conjunction); doctors (noun); must (modal verb); make (verb); final (adjective); decisions (noun).",
    "note": ""
  },
  {
    "sentence": "The future of Chat AI will be very exciting.",
    "structure": "S + will + linking verb + adjective complement",
    "grammar": "Dùng will để nói về dự đoán trong tương lai.",
    "translation": "Tương lai của Chat AI sẽ rất thú vị.",
    "function": "The future of Chat AI (chủ ngữ); will be (động từ tương lai); very exciting (bổ ngữ tính từ).",
    "pos": "The (article); future (noun); of (preposition); Chat (noun); AI (noun); will (modal verb); be (linking verb); very (adverb); exciting (adjective).",
    "note": ""
  },
  {
    "sentence": "In the coming years, Chat AI may become faster, smarter, and easier to use.",
    "structure": "Prepositional phrase + S + may + become + comparative complements",
    "grammar": "Dùng may để nói khả năng và become với tính từ so sánh hơn để nói sự thay đổi.",
    "translation": "Trong những năm tới, Chat AI có thể trở nên nhanh hơn, thông minh hơn và dễ sử dụng hơn.",
    "function": "In the coming years (cụm giới từ chỉ thời gian); Chat AI (chủ ngữ); may become (động từ); faster, smarter, and easier to use (các bổ ngữ so sánh hơn).",
    "pos": "In (preposition); the (article); coming (adjective); years (noun); Chat (noun); AI (noun); may (modal verb); become (verb); faster (adjective); smarter (adjective); and (conjunction); easier (adjective); to (infinitive marker); use (verb).",
    "note": ""
  },
  {
    "sentence": "Chat AI should help people, not replace them.",
    "structure": "S + should + V + O + contrasted verb phrase",
    "grammar": "Dùng should để nói điều nên làm và not để đối lập với điều không nên làm.",
    "translation": "Chat AI nên giúp con người chứ không thay thế họ.",
    "function": "Chat AI (chủ ngữ); should help (động từ); people (tân ngữ); not replace them (cụm động từ đối lập phủ định).",
    "pos": "Chat (noun); AI (noun); should (modal verb); help (verb); people (noun); not (adverb); replace (verb); them (pronoun).",
    "note": ""
  }
];
