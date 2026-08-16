// ===== money03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Cash includes coins and banknotes that people can hold and use directly.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Can + động từ nguyên mẫu để nói khả năng hoặc công dụng.",
    "translation": "Tiền mặt gồm tiền xu và tiền giấy mà mọi người có thể cầm và sử dụng trực tiếp.",
    "function": "Cash includes coins (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Cash (noun); includes (verb); coins (noun); and (conjunction); banknotes (noun); that (pronoun); people (noun); can (modal verb); hold (verb); and (conjunction); use (verb); directly (adverb).",
    "note": ""
  },
  {
    "sentence": "Bank cards and digital payments are convenient because people do not need to carry much cash.",
    "structure": "Main clause + because-clause",
    "grammar": "Hiện tại đơn kết hợp mệnh đề nguyên nhân với because.",
    "translation": "Thẻ ngân hàng và thanh toán kỹ thuật số tiện lợi vì mọi người không cần mang nhiều tiền mặt.",
    "function": "Bank cards and (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Bank (noun); cards (noun); and (conjunction); digital (adjective); payments (noun); are (linking/auxiliary verb); convenient (adjective); because (conjunction); people (noun); do (verb); not (adverb); need (verb); to (preposition); carry (verb); much (determiner); cash (noun).",
    "note": ""
  },
  {
    "sentence": "However, users must protect their passwords and personal banking information.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Must + động từ nguyên mẫu để diễn tả yêu cầu mạnh.",
    "translation": "Tuy nhiên, người dùng phải bảo vệ mật khẩu và thông tin ngân hàng cá nhân.",
    "function": "However users must (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "However (adverb); users (noun); must (modal verb); protect (verb); their (pronoun); passwords (noun); and (conjunction); personal (adjective); banking (verb); information (noun).",
    "note": ""
  },
  {
    "sentence": "People should choose the safest and most suitable method for each situation.",
    "structure": "S + should + coordinated bare infinitives + complements",
    "grammar": "Should + động từ nguyên mẫu để đưa ra lời khuyên.",
    "translation": "Mọi người nên chọn phương thức an toàn nhất và phù hợp nhất cho từng tình huống.",
    "function": "People should choose (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "People (noun); should (modal verb); choose (verb); the (article); safest (adjective); and (conjunction); most (determiner); suitable (adjective); method (noun); for (preposition); each (determiner); situation (noun).",
    "note": ""
  },
  {
    "sentence": "Most adults earn money by working.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Hầu hết người lớn kiếm tiền bằng cách làm việc.",
    "function": "Most adults earn (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Most (determiner); adults (noun); earn (verb); money (noun); by (preposition); working (noun).",
    "note": ""
  },
  {
    "sentence": "The amount of money a person earns often depends on their skills, education, experience, and responsibilities.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Số tiền một người kiếm được thường phụ thuộc vào kỹ năng, giáo dục, kinh nghiệm và trách nhiệm của họ.",
    "function": "The amount of (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "The (article); amount (noun); of (preposition); money (noun); a (article); person (noun); earns (verb); often (adverb); depends (verb); on (preposition); their (pronoun); skills (noun); education (noun); experience (noun); and (conjunction); responsibilities (noun).",
    "note": ""
  },
  {
    "sentence": "Emergency savings are money kept for unexpected situations.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Tiết kiệm khẩn cấp là tiền được giữ cho những tình huống bất ngờ.",
    "function": "Emergency savings are (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Emergency (noun); savings (noun); are (linking/auxiliary verb); money (noun); kept (noun); for (preposition); unexpected (adjective); situations (noun).",
    "note": ""
  },
  {
    "sentence": "A person may suddenly become sick, lose a job, or need to repair a motorbike or household item.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "May + động từ nguyên mẫu để nói khả năng.",
    "translation": "Một người có thể đột nhiên bị bệnh, mất việc hoặc cần sửa xe máy hay đồ dùng trong nhà.",
    "function": "A person may (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "A (article); person (noun); may (modal verb); suddenly (adverb); become (verb); sick (adjective); lose (verb); a (article); job (noun); or (conjunction); need (verb); to (preposition); repair (verb); a (article); motorbike (noun); or (conjunction); household (noun); item (noun).",
    "note": ""
  },
  {
    "sentence": "However, money alone cannot create a truly happy life.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Tuy nhiên, chỉ tiền thôi không thể tạo ra một cuộc sống thật sự hạnh phúc.",
    "function": "However money alone (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "However (adverb); money (noun); alone (noun); cannot (modal verb); create (verb); a (article); truly (adverb); happy (adjective); life (noun).",
    "note": ""
  },
  {
    "sentence": "People should spend responsibly, save for the future, and help others when possible.",
    "structure": "Main clause + when-clause",
    "grammar": "Should + động từ nguyên mẫu để đưa ra lời khuyên.",
    "translation": "Mọi người nên chi tiêu có trách nhiệm, tiết kiệm cho tương lai và giúp đỡ người khác khi có thể.",
    "function": "People should spend (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "People (noun); should (modal verb); spend (verb); responsibly (adverb); save (verb); for (preposition); the (article); future (noun); and (conjunction); help (verb); others (noun); when (conjunction); possible (adjective).",
    "note": ""
  }
];
