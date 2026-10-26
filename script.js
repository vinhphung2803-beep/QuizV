const questions = [
  {
    owner: "Vinh",
    text: "Nguồn gốc tự nhiên của ý thức gồm những yếu tố nào?",
    options: [
      "Chỉ cần bộ óc người hoàn thiện.",
      "Bộ óc người, thế giới khách quan và sự tác động của thế giới khách quan vào bộ óc người.",
      "Lao động và ngôn ngữ loài người.",
      "Thế giới vật chất tự nhiên và máy tính điện tử."
    ],
    answer: 1,
    explanation: "Nguồn gốc tự nhiên của ý thức gắn với bộ óc người – dạng vật chất có tổ chức cao – và sự tác động của thế giới khách quan lên bộ óc.",
    hint: "Hãy nghĩ đến điều kiện bên trong con người và thế giới bên ngoài tác động đến con người."
  },
  {
    owner: "Vinh Phung",
    text: "Yếu tố nào đóng vai trò quyết định trực tiếp đến sự hình thành và phát triển của ý thức trong nguồn gốc xã hội?",
    options: [
      "Cảm giác và tri giác.",
      "Sự tiến hóa sinh học của loài vật.",
      "Lao động và ngôn ngữ.",
      "Phản xạ không điều kiện."
    ],
    answer: 2,
    explanation: "Lao động và ngôn ngữ là hai yếu tố cơ bản của nguồn gốc xã hội, góp phần hình thành và phát triển ý thức con người.",
    hint: "Hai yếu tố này giúp con người cải biến tự nhiên và trao đổi kinh nghiệm với nhau."
  },
  {
    owner: "Trần Anh Tài",
    text: "Bản chất của ý thức theo quan điểm triết học Mác – Lênin là gì?",
    options: [
      "Là một dạng vật chất đặc biệt do bộ óc tiết ra.",
      "Là hình ảnh chủ quan của thế giới khách quan; sự phản ánh tích cực, sáng tạo hiện thực khách quan.",
      "Là năng lực siêu tự nhiên tồn tại độc lập với con người.",
      "Là toàn bộ tri thức có sẵn trong não người từ khi sinh ra."
    ],
    answer: 1,
    explanation: "Ý thức là hình ảnh chủ quan của thế giới khách quan và là sự phản ánh tích cực, sáng tạo hiện thực khách quan thông qua bộ óc người.",
    hint: "Phân biệt sự phản ánh thụ động với quá trình nhận thức có chọn lọc và sáng tạo."
  },
  {
    owner: "Hà Thiện Nhân",
    text: "Kết cấu của ý thức theo chiều ngang bao gồm những yếu tố cơ bản nào?",
    options: [
      "Tự ý thức, tiềm thức, vô thức.",
      "Tri thức, tình cảm, ý chí.",
      "Cảm giác, tri giác, biểu tượng.",
      "Tư duy trừu tượng và tư duy logic."
    ],
    answer: 1,
    explanation: "Theo cách phân tích thường dùng trong giáo trình, kết cấu theo chiều ngang bao gồm tri thức, tình cảm và ý chí; các cách phân chia khác xét những mặt khác của đời sống ý thức.",
    hint: "Nghĩ đến hiểu biết, cảm xúc và quyết tâm hành động."
  },
  {
    owner: "Mai Tiến Minh",
    text: "Theo quan điểm triết học Mác – Lênin trong nội dung bài học, vì sao không nên đồng nhất hoạt động của máy tính/AI với ý thức con người?",
    options: [
      "Vì máy tính chưa đủ dung lượng bộ nhớ.",
      "Vì máy tính không có nguồn điện ổn định.",
      "Vì máy móc là hệ thống kỹ thuật do con người tạo ra; xử lý thông tin không tự nó chứng minh có ý thức người với nguồn gốc xã hội và hoạt động thực tiễn.",
      "Vì máy tính chỉ dùng ngôn ngữ lập trình, không thể xử lý ngôn ngữ tự nhiên."
    ],
    answer: 2,
    explanation: "Dung lượng bộ nhớ, điện năng hay ngôn ngữ lập trình không quyết định vấn đề này. Cần phân biệt khả năng xử lý thông tin của hệ thống kỹ thuật với quan niệm triết học về ý thức người gắn với bộ óc, đời sống xã hội và thực tiễn.",
    hint: "Hãy tập trung vào sự khác nhau giữa xử lý thông tin bằng kỹ thuật và ý thức người trong đời sống xã hội."
  },
  {
    owner: "Mai Tiến Minh",
    text: "Theo chủ nghĩa duy vật biện chứng, mối quan hệ giữa vật chất và ý thức được hiểu như thế nào?",
    options: [
      "Ý thức quyết định hoàn toàn vật chất.",
      "Vật chất và ý thức không có quan hệ với nhau.",
      "Vật chất quyết định ý thức; ý thức có tính độc lập tương đối và tác động trở lại vật chất thông qua thực tiễn.",
      "Vật chất và ý thức là hai thứ hoàn toàn đồng nhất."
    ],
    answer: 2,
    explanation: "Vật chất có trước và quyết định ý thức. Ý thức có thể tác động trở lại hiện thực vật chất thông qua hoạt động thực tiễn của con người.",
    hint: "Hãy nhớ cả chiều quyết định và chiều tác động trở lại."
  },
  {
    owner: "Trần Anh Tài",
    text: "Đặc điểm nào thể hiện tính tích cực, sáng tạo của ý thức?",
    options: [
      "Ý thức sao chép hiện thực một cách máy móc, nguyên xi.",
      "Ý thức phản ánh hiện thực, xử lý thông tin và định hướng hoạt động của con người.",
      "Ý thức tồn tại hoàn toàn tách rời bộ óc.",
      "Ý thức không chịu ảnh hưởng từ hoàn cảnh sống."
    ],
    answer: 1,
    explanation: "Ý thức không chỉ phản ánh hiện thực mà còn có khả năng khái quát, dự báo, xây dựng mục tiêu và định hướng hành động.",
    hint: "Ý thức không chỉ ghi nhận những gì đang có mà còn giúp con người lập kế hoạch."
  },
  {
    owner: "Phùng Thế Vinh",
    text: "Tri thức giữ vai trò gì trong kết cấu của ý thức?",
    options: [
      "Là yếu tố không liên quan đến ý thức.",
      "Là yếu tố cơ bản, phương thức tồn tại của ý thức.",
      "Là yếu tố chỉ xuất hiện khi con người ngủ.",
      "Là yếu tố thay thế hoàn toàn tình cảm và ý chí."
    ],
    answer: 1,
    explanation: "Tri thức là phương thức tồn tại của ý thức và là nhân tố cơ bản giúp con người nhận thức, định hướng hoạt động.",
    hint: "Hãy nghĩ đến những hiểu biết mà con người sử dụng để nhận thức và hành động."
  },
  {
    owner: "Mai Tiến Minh",
    text: "Tình cảm có vai trò như thế nào đối với ý thức và hoạt động của con người?",
    options: [
      "Không ảnh hưởng đến hành vi.",
      "Luôn thay thế hoàn toàn tri thức.",
      "Thể hiện thái độ, rung động của con người và có thể ảnh hưởng đến động lực hành động.",
      "Chỉ là phản ứng sinh học không liên quan đến đời sống xã hội."
    ],
    answer: 2,
    explanation: "Tình cảm biểu hiện thái độ và sự rung động của con người trước hiện thực, đồng thời có thể tác động đến động lực và cách hành động.",
    hint: "Tình cảm có thể khiến con người yêu thích, quan tâm hoặc quyết tâm thực hiện một việc."
  },
  {
    owner: "Hà Thiện Nhân",
    text: "Ý chí được hiểu phù hợp nhất là gì?",
    options: [
      "Khả năng ghi nhớ mọi thông tin.",
      "Khả năng điều khiển thời tiết.",
      "Sự quyết tâm và nỗ lực vượt khó để thực hiện mục đích.",
      "Phản ứng tự động của cơ thể trước kích thích."
    ],
    answer: 2,
    explanation: "Ý chí thể hiện năng lực huy động nỗ lực, vượt qua khó khăn và điều chỉnh hành vi để đạt mục đích đã xác định.",
    hint: "Đó là yếu tố giúp một người kiên trì theo đuổi mục tiêu dù gặp trở ngại."
  },
  {
    owner: "Trần Anh Tài",
    text: "Điều kiện vật chất thay đổi có thể dẫn đến điều gì đối với ý thức?",
    options: [
      "Ý thức luôn giữ nguyên, bất kể hoàn cảnh.",
      "Ý thức có thể thay đổi theo sự biến đổi của điều kiện vật chất.",
      "Vật chất lập tức biến mất.",
      "Ý thức không còn chịu tác động từ xã hội."
    ],
    answer: 1,
    explanation: "Vì vật chất quyết định ý thức nên khi điều kiện vật chất và hoàn cảnh sống thay đổi, nhận thức và quan niệm của con người cũng có thể thay đổi.",
    hint: "Hãy liên hệ việc môi trường sống, điều kiện học tập và lao động thay đổi."
  },
  {
    owner: "Phùng Thế Vinh",
    text: "Theo quan điểm duy vật biện chứng, muốn thay đổi nhận thức của con người một cách hiệu quả cần chú ý điều gì?",
    options: [
      "Chỉ cần yêu cầu mọi người suy nghĩ khác đi.",
      "Bỏ qua hoàn cảnh sống và điều kiện thực tế.",
      "Kết hợp nâng cao nhận thức với cải thiện điều kiện thực tế và tổ chức hoạt động thực tiễn.",
      "Chỉ dựa vào cảm xúc nhất thời."
    ],
    answer: 2,
    explanation: "Cần tôn trọng vai trò của điều kiện khách quan, đồng thời phát huy tính chủ động của con người thông qua giáo dục, tổ chức và thực tiễn.",
    hint: "Không chỉ thay đổi suy nghĩ bằng lời nói; hãy quan tâm cả hoàn cảnh và hành động thực tế."
  },
  {
    owner: "Mai Tiến Minh",
    text: "Một sinh viên lập kế hoạch học tập, tìm phương pháp phù hợp và kiên trì thực hiện để đạt kết quả tốt. Ví dụ này thể hiện điều gì?",
    options: [
      "Ý thức có thể định hướng hoạt động thực tiễn của con người.",
      "Ý thức tồn tại độc lập tuyệt đối với vật chất.",
      "Vật chất không có vai trò quyết định.",
      "Mọi hành động đều hoàn toàn do bản năng quyết định."
    ],
    answer: 0,
    explanation: "Kế hoạch và mục tiêu trong ý thức có thể định hướng hành động thực tiễn. Hiệu quả cuối cùng vẫn phụ thuộc vào điều kiện khách quan và cách thực hiện.",
    hint: "Suy nghĩ và kế hoạch đã ảnh hưởng như thế nào đến hành động của sinh viên?"
  },
  {
    owner: "Hà Thiện Nhân",
    text: "Quan điểm nào sau đây mắc sai lầm chủ quan, duy ý chí?",
    options: [
      "Đánh giá điều kiện thực tế trước khi lập kế hoạch.",
      "Điều chỉnh mục tiêu khi hoàn cảnh thay đổi.",
      "Cho rằng chỉ cần mong muốn mạnh mẽ là có thể đạt mọi mục tiêu, bất kể điều kiện khách quan.",
      "Kết hợp kiến thức với thực hành."
    ],
    answer: 2,
    explanation: "Chủ quan, duy ý chí là tuyệt đối hóa vai trò của ý thức và mong muốn, xem nhẹ hoặc phủ nhận điều kiện khách quan.",
    hint: "Phương án sai là phương án cho rằng mong muốn có thể thay thế mọi điều kiện thực tế."
  },
  {
    owner: "Trần Anh Tài",
    text: "Bài học phương pháp luận quan trọng từ mối quan hệ giữa vật chất và ý thức là gì?",
    options: [
      "Chỉ cần dựa vào mong muốn cá nhân.",
      "Tôn trọng khách quan, đồng thời phát huy tính năng động, sáng tạo của ý thức.",
      "Không cần quan tâm đến điều kiện thực tế.",
      "Chỉ hành động theo thói quen, không cần suy nghĩ."
    ],
    answer: 1,
    explanation: "Cần xuất phát từ hiện thực khách quan, tôn trọng quy luật và điều kiện thực tế, đồng thời chủ động phát huy tri thức, ý chí và năng lực sáng tạo.",
    hint: "Kết hợp hai yêu cầu: không duy ý chí và không thụ động trước hoàn cảnh."
  }
];

const homeScreen = document.getElementById("homeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const answerList = document.getElementById("answerList");
const feedback = document.getElementById("feedback");
const hintButton = document.getElementById("hintButton");
const hintBox = document.getElementById("hintBox");
const soundToggle = document.getElementById("soundToggle");

let current = 0;
let score = 0;
let correct = 0;
let answered = false;
let soundOn = true;
let history = [];
let audioContext;

function playTone(frequency = 660, duration = 0.09, type = "sine", volume = 0.045) {
  if (!soundOn) return;

  try {
    audioContext = audioContext || new (
      window.AudioContext || window.webkitAudioContext
    )();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.warn("Không thể phát âm thanh:", error);
  }
}

function playSequence(notes) {
  if (!soundOn) return;

  notes.forEach((note, index) => {
    setTimeout(() => {
      playTone(note.frequency, note.duration || 0.12, "sine", 0.04);
    }, index * (note.delay || 150));
  });
}

function playStartSound() {
  playSequence([
    { frequency: 440 },
    { frequency: 554 },
    { frequency: 659 }
  ]);
}

function playCorrectSound() {
  playSequence([
    { frequency: 523 },
    { frequency: 659 },
    { frequency: 784 }
  ]);
}

function playWrongSound() {
  playSequence([
    { frequency: 330, duration: 0.14 },
    { frequency: 247, duration: 0.18 }
  ]);
}

function playHintSound() {
  playTone(700, 0.12);
}

function playFinishSound() {
  playSequence([
    { frequency: 523, delay: 170 },
    { frequency: 659, delay: 170 },
    { frequency: 784, delay: 170 },
    { frequency: 1046, duration: 0.35, delay: 200 }
  ]);
}

function startGame() {
  current = 0;
  score = 0;
  correct = 0;
  history = [];

  homeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  playStartSound();
  renderQuestion();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  answered = false;

  const q = questions[current];

  document.getElementById("questionTag").textContent =
    `THỬ THÁCH ${current + 1}/${questions.length}`;

  document.getElementById("scoreDisplay").textContent = score;
  document.getElementById("topScore").textContent = score;

  document.getElementById("progressBar").style.width =
    `${(current / questions.length) * 100}%`;

  document.getElementById("questionOwner").textContent =
    `Phụ trách: ${q.owner}`;

  document.getElementById("questionText").textContent = q.text;

  answerList.innerHTML = "";
  feedback.className = "feedback hidden";
  feedback.textContent = "";

  hintBox.classList.add("hidden");
  hintBox.textContent = "";

  hintButton.disabled = false;
  nextButton.disabled = true;

  nextButton.textContent =
    current === questions.length - 1
      ? "Xem kết quả 🏆"
      : "Tiếp tục ➜";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = "ABCD"[index];

    const text = document.createElement("span");
    text.textContent = option;

    button.append(letter, text);

    button.addEventListener("click", () => {
      playTone(500, 0.06);
      chooseAnswer(index);
    });

    answerList.appendChild(button);
  });
}

function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const q = questions[current];
  const isCorrect = index === q.answer;

  if (isCorrect) {
    score += 10;
    correct++;
    playCorrectSound();
  } else {
    playWrongSound();
  }

  history.push({
    question: q.text,
    selected: index,
    answer: q.answer,
    isCorrect,
    explanation: q.explanation
  });

  [...answerList.children].forEach((button, i) => {
    button.disabled = true;

    if (i === q.answer) {
      button.classList.add("correct");
    } else if (i === index) {
      button.classList.add("wrong");
    }
  });

  feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  feedback.innerHTML = "";

  const heading = document.createElement("strong");
  heading.textContent = isCorrect
    ? "🎉 Chính xác! +10 điểm"
    : "🌱 Chưa chính xác!";

  const explanation = document.createElement("span");
  explanation.textContent = q.explanation;

  feedback.append(heading, document.createElement("br"), explanation);
  feedback.classList.remove("hidden");

  document.getElementById("scoreDisplay").textContent = score;
  document.getElementById("topScore").textContent = score;

  document.getElementById("progressBar").style.width =
    `${((current + 1) / questions.length) * 100}%`;

  nextButton.disabled = false;
  hintButton.disabled = true;
}

function showHint() {
  hintBox.textContent = `💡 Gợi ý: ${questions[current].hint}`;
  hintBox.classList.remove("hidden");
  hintButton.disabled = true;
  playHintSound();
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  document.getElementById("finalScore").textContent = score;
  document.getElementById("correctCount").textContent = correct;
  document.getElementById("wrongCount").textContent =
    questions.length - correct;

  document.getElementById("percentScore").textContent =
    `${Math.round((correct / questions.length) * 100)}%`;

  document.getElementById("progressBar").style.width = "100%";

  let title = "Cố gắng thêm nhé!";
  let message =
    "Đọc lại phần giải thích rồi thử sức lần nữa. Mỗi lượt chơi là một cơ hội học tốt hơn.";
  let icon = "🌱";

  if (score >= 120) {
    title = "Xuất sắc!";
    message =
      "Bạn đã nắm rất vững kiến thức về ý thức và vật chất. Tuyệt vời!";
    icon = "🏆";
  } else if (score >= 80) {
    title = "Làm tốt lắm!";
    message =
      "Bạn đã nắm được nhiều kiến thức. Ôn lại các câu sai để tiến bộ hơn nhé!";
    icon = "🌟";
  } else if (score >= 50) {
    title = "Đang tiến bộ!";
    message =
      "Hãy xem lại phần giải thích và thử sức thêm lần nữa nhé!";
    icon = "💪";
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("resultIcon").textContent = icon;

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "<h3>📖 Ôn tập sau trò chơi</h3>";

  history.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = `review-item ${item.isCorrect ? "good" : "bad"}`;

    const heading = document.createElement("b");
    heading.textContent =
      `${item.isCorrect ? "✓" : "✗"} Câu ${i + 1}: ${item.question}`;

    const answer = document.createElement("div");
    answer.textContent =
      `Đáp án đúng: ${"ABCD"[item.answer]}. ${questions[i].options[item.answer]}`;

    const explanation = document.createElement("div");
    explanation.textContent = item.explanation;

    row.append(heading, answer, explanation);
    reviewList.appendChild(row);
  });

  playFinishSound();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults();
  }
});

hintButton.addEventListener("click", showHint);

document.getElementById("restartButton").addEventListener("click", startGame);

soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;

  soundToggle.textContent = soundOn ? "🔊" : "🔇";
  soundToggle.setAttribute(
    "aria-label",
    soundOn ? "Tắt âm thanh" : "Bật âm thanh"
  );

  if (soundOn) {
    playTone(660);
  }
});
