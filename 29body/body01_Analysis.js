const newAnalysisData = [
  {
    "sentence": "The brain is an important organ inside the head.",
    "structure": "S + be + noun phrase",
    "grammar": "Dùng hiện tại đơn với be để định nghĩa hoặc mô tả cơ quan.",
    "translation": "Não là một cơ quan quan trọng bên trong đầu.",
    "function": "The brain (chủ ngữ); is (động từ liên kết); an important organ (bổ ngữ chủ ngữ); inside the head (cụm giới từ chỉ vị trí).",
    "pos": "The (article); brain (noun); is (linking/auxiliary verb); an (article); important (adjective); organ (noun); inside (preposition); the (article); head (noun).",
    "note": ""
  },
  {
    "sentence": "The skull protects it from many injuries.",
    "structure": "S + V-s/es + O",
    "grammar": "Dùng hiện tại đơn với ngôi thứ ba số ít để nói chức năng.",
    "translation": "Hộp sọ bảo vệ não khỏi nhiều chấn thương.",
    "function": "The skull (chủ ngữ); protects (động từ chính); it (tân ngữ); from many injuries (cụm giới từ chỉ điều được bảo vệ khỏi).",
    "pos": "The (article); skull (noun); protects (verb); it (pronoun); from (preposition); many (determiner); injuries (noun).",
    "note": ""
  },
  {
    "sentence": "It helps us think, learn, remember, speak, and make decisions.",
    "structure": "S + help(s) + O + V",
    "grammar": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng.",
    "translation": "Não giúp chúng ta suy nghĩ, học, ghi nhớ, nói và đưa ra quyết định.",
    "function": "It (chủ ngữ); helps (động từ chính); us (tân ngữ); think, learn, remember, speak, and make decisions (các động từ nguyên mẫu song song).",
    "pos": "It (pronoun); helps (verb); us (pronoun); think (verb); learn (verb); remember (verb); speak (verb); and (conjunction); make (verb); decisions (noun).",
    "note": ""
  },
  {
    "sentence": "It also controls movement, breathing, feelings, and the five senses.",
    "structure": "S + V + O, V + O, and V + O",
    "grammar": "Dùng nhiều động từ song song để liệt kê chức năng.",
    "translation": "Não cũng kiểm soát vận động, hô hấp, cảm xúc và năm giác quan.",
    "function": "It (chủ ngữ); also (trạng từ); controls (động từ chính); movement, breathing, feelings, and the five senses (cụm tân ngữ liệt kê).",
    "pos": "It (pronoun); also (adverb); controls (verb); movement (noun); breathing (noun); feelings (noun); and (conjunction); the (article); five (number); senses (noun).",
    "note": ""
  },
  {
    "sentence": "Different parts of the brain do different jobs, but they work together.",
    "structure": "Clause + but + clause",
    "grammar": "Dùng but để nối hai ý tương phản.",
    "translation": "Các phần khác nhau của não đảm nhiệm những công việc khác nhau, nhưng chúng phối hợp với nhau.",
    "function": "Different parts of the brain (chủ ngữ mệnh đề một); do different jobs (vị ngữ); but (liên từ); they work together (mệnh đề tương phản).",
    "pos": "Different (adjective); parts (noun); of (preposition); the (article); brain (noun); do (verb); different (adjective); jobs (noun); but (conjunction); they (pronoun); work (verb); together (adverb).",
    "note": ""
  },
  {
    "sentence": "To keep the brain healthy, people should sleep enough, eat good food, and exercise often.",
    "structure": "To + V, S + should + V",
    "grammar": "Dùng to-infinitive ở đầu câu để nói mục đích.",
    "translation": "Để giữ não khỏe mạnh, mọi người nên ngủ đủ, ăn thực phẩm tốt và tập thể dục thường xuyên.",
    "function": "To keep the brain healthy (cụm mục đích); people (chủ ngữ); should sleep, eat, and exercise (ba động từ với should); enough/good food/often (các bổ ngữ và trạng từ).",
    "pos": "To (preposition); keep (verb); the (article); brain (noun); healthy (adjective); people (pronoun); should (modal verb); sleep (verb); enough (adverb); eat (verb); good (adjective); food (noun); and (conjunction); exercise (verb); often (adverb).",
    "note": ""
  },
  {
    "sentence": "Wearing a helmet during sports can protect the brain from serious injury.",
    "structure": "S + can + V + O",
    "grammar": "Dùng can để diễn tả khả năng hoặc tác dụng.",
    "translation": "Đội mũ bảo hiểm khi chơi thể thao có thể bảo vệ não khỏi chấn thương nghiêm trọng.",
    "function": "Wearing a helmet during sports (cụm V-ing làm chủ ngữ); can protect (modal + động từ); the brain (tân ngữ); from serious injury (cụm giới từ).",
    "pos": "Wearing (gerund); a (article); helmet (noun); during (preposition); sports (noun); can (modal verb); protect (verb); the (article); brain (noun); from (preposition); serious (adjective); injury (noun).",
    "note": ""
  },
  {
    "sentence": "The heart beats faster when we run, exercise, or feel excited.",
    "structure": "Main clause + when + clause",
    "grammar": "Dùng when để nói điều xảy ra trong một tình huống cụ thể.",
    "translation": "Tim đập nhanh hơn khi chúng ta chạy, tập thể dục hoặc cảm thấy phấn khích.",
    "function": "The heart (chủ ngữ); beats faster (động từ + trạng từ so sánh); when (liên từ); we run, exercise, or feel excited (mệnh đề thời gian).",
    "pos": "The (article); heart (noun); beats (verb); faster (comparative adverb); when (conjunction); we (pronoun); run (verb); exercise (verb); or (conjunction); feel (verb); excited (adjective).",
    "note": ""
  },
  {
    "sentence": "The right lung is a little larger than the left lung.",
    "structure": "S + be + comparative + than + noun",
    "grammar": "Dùng tính từ so sánh hơn để so sánh hai đối tượng.",
    "translation": "Phổi phải lớn hơn phổi trái một chút.",
    "function": "The right lung (chủ ngữ); is (động từ liên kết); a little larger (bổ ngữ so sánh); than the left lung (cụm so sánh).",
    "pos": "The (article); right (adjective); lung (noun); is (linking/auxiliary verb); a (article); little (adverb); larger (comparative adjective); than (conjunction); the (article); left (adjective); lung (noun).",
    "note": ""
  },
  {
    "sentence": "Wearing a mask in dirty places may also protect the lungs from harmful particles.",
    "structure": "S + may + V + O",
    "grammar": "Dùng may để nói khả năng có thể xảy ra.",
    "translation": "Đeo khẩu trang ở những nơi bẩn có thể giúp bảo vệ phổi khỏi các hạt có hại.",
    "function": "Wearing a mask in dirty places (cụm V-ing làm chủ ngữ); may also protect (modal + trạng từ + động từ); the lungs (tân ngữ); from harmful particles (cụm giới từ).",
    "pos": "Wearing (gerund); a (article); mask (noun); in (preposition); dirty (adjective); places (noun); may (modal verb); also (adverb); protect (verb); the (article); lungs (noun); from (preposition); harmful (adjective); particles (noun).",
    "note": ""
  }
];
