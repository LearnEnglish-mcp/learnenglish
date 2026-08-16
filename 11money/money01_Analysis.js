// ===== money01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Money is something people use to buy goods and services.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Tiền là thứ mọi người dùng để mua hàng hóa và dịch vụ.",
    "function": "Money is something (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Money (noun); is (linking/auxiliary verb); something (pronoun); people (noun); use (verb); to (preposition); buy (verb); goods (noun); and (conjunction); services (noun).",
    "note": ""
  },
  {
    "sentence": "It can be coins, banknotes, or digital money in a bank account.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Can + động từ nguyên mẫu để nói khả năng hoặc công dụng.",
    "translation": "Tiền có thể là tiền xu, tiền giấy hoặc tiền kỹ thuật số trong tài khoản ngân hàng.",
    "function": "It can be (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "It (pronoun); can (modal verb); be (linking/auxiliary verb); coins (noun); banknotes (noun); or (conjunction); digital (adjective); money (noun); in (preposition); a (article); bank (noun); account (noun).",
    "note": ""
  },
  {
    "sentence": "Money also helps us compare the prices of different products.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Tiền cũng giúp chúng ta so sánh giá của các sản phẩm khác nhau.",
    "function": "Money also helps (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Money (noun); also (adverb); helps (verb); us (pronoun); compare (verb); the (article); prices (noun); of (preposition); different (adjective); products (noun).",
    "note": ""
  },
  {
    "sentence": "Without money, people would need to exchange goods directly.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Would + động từ nguyên mẫu trong tình huống giả định.",
    "translation": "Nếu không có tiền, mọi người sẽ phải trao đổi hàng hóa trực tiếp.",
    "function": "Without money people (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Without (preposition); money (noun); people (noun); would (modal verb); need (verb); to (preposition); exchange (verb); goods (noun); directly (adverb).",
    "note": ""
  },
  {
    "sentence": "Money is important, but we should use it carefully.",
    "structure": "S + should + coordinated bare infinitives + complements",
    "grammar": "Should + động từ nguyên mẫu để đưa ra lời khuyên.",
    "translation": "Tiền quan trọng, nhưng chúng ta nên sử dụng nó cẩn thận.",
    "function": "Money is important (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Money (noun); is (linking/auxiliary verb); important (adjective); but (conjunction); we (pronoun); should (modal verb); use (verb); it (pronoun); carefully (adverb).",
    "note": ""
  },
  {
    "sentence": "We need to earn, save, and spend it wisely.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Chúng ta cần kiếm, tiết kiệm và chi tiêu tiền một cách khôn ngoan.",
    "function": "We need to (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "We (pronoun); need (verb); to (preposition); earn (verb); save (verb); and (conjunction); spend (verb); it (pronoun); wisely (adverb).",
    "note": ""
  },
  {
    "sentence": "People need money to pay for their basic needs.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Mọi người cần tiền để chi trả cho những nhu cầu cơ bản.",
    "function": "People need money (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "People (noun); need (verb); money (noun); to (preposition); pay (verb); for (preposition); their (pronoun); basic (adjective); needs (noun).",
    "note": ""
  },
  {
    "sentence": "Money allows people to choose the products and services they need.",
    "structure": "S + V + object/complement",
    "grammar": "Hiện tại đơn với cấu trúc chủ ngữ và vị ngữ rõ ràng.",
    "translation": "Tiền cho phép mọi người lựa chọn những sản phẩm và dịch vụ họ cần.",
    "function": "Money allows people (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Money (noun); allows (verb); people (noun); to (preposition); choose (verb); the (article); products (noun); and (conjunction); services (noun); they (pronoun); need (verb).",
    "note": ""
  },
  {
    "sentence": "Saving money is a good habit that everyone can practice.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Can + động từ nguyên mẫu để nói khả năng hoặc công dụng.",
    "translation": "Tiết kiệm tiền là một thói quen tốt mà mọi người đều có thể thực hành.",
    "function": "Saving money is (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "Saving (noun); money (noun); is (linking/auxiliary verb); a (article); good (adjective); habit (noun); that (pronoun); everyone (pronoun); can (modal verb); practice (verb).",
    "note": ""
  },
  {
    "sentence": "People can save money by bringing lunch from home, turning off unused lights, and avoiding unnecessary shopping.",
    "structure": "S + modal verb + bare infinitive + complement",
    "grammar": "Can + động từ nguyên mẫu để nói khả năng hoặc công dụng.",
    "translation": "Mọi người có thể tiết kiệm tiền bằng cách mang bữa trưa từ nhà, tắt những đèn không sử dụng và tránh mua sắm không cần thiết.",
    "function": "People can save (cụm mở đầu/chủ ngữ); phần động từ trung tâm (vị ngữ chính); các từ còn lại (tân ngữ, bổ ngữ hoặc trạng ngữ theo ngữ cảnh).",
    "pos": "People (noun); can (modal verb); save (verb); money (noun); by (preposition); bringing (noun); lunch (noun); from (preposition); home (noun); turning (verb); off (adverb); unused (verb); lights (noun); and (conjunction); avoiding (noun); unnecessary (adjective); shopping (noun).",
    "note": ""
  }
];
