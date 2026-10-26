
const questions = [
  {
    owner: "Phùng Thế Vinh",
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
    owner: "Mai Tiến Minh",
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
    owner: "Hà Thiện Nhân",
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
    owner: "Trần Anh Tài",
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
    owner: "Phùng Thế Vinh",
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

function playTone(frequency = 660, duration = 0.09) {
  if (!soundOn) return;

  try {
    audioContext = audioContext ||
      new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    gain.gain.value = 0.045;

    oscillator.start();

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.stop(audioContext.currentTime + duration);
  } catch (_) {}
}

function startGame() {
  current = 0;
  score = 0;
  correct = 0;
  history = [];

  homeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

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
    button.innerHTML =
      `<span class="answer-letter">${"ABCD"[index]}</span><span></span>`;

    button.querySelector("span:last-child").textContent = option;

    button.addEventListener("click", () => chooseAnswer(index));

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
    playTone(790, 0.13);
  } else {
    playTone(240, 0.18);
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

  feedback.innerHTML =
    `<strong>${isCorrect ? "🎉 Chính xác! +10 điểm" : "🌱 Chưa chính xác!"}</strong><br>`;

  const explanation = document.createElement("span");
  explanation.textContent = q.explanation;

  feedback.appendChild(explanation);
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
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  document.getElementById("finalScore").textContent = score;
  document.getElementById("correctCount").textContent = correct;

  document.getElementById("wrongCount").textContent =
    questions.length - correct;

  document.getElementById("percentScore").textContent =
    `${Math.round(correct / questions.length * 100)}%`;

  document.getElementById("progressBar").style.width = "100%";

  let title = "Cố gắng thêm nhé!";
  let message =
    "Đọc lại phần giải thích rồi thử sức lần nữa. Mỗi lượt chơi là một cơ hội học tốt hơn.";
  let icon = "🌱";

  if (score >= 40) {
    title = "Xuất sắc!";
    message =
      "Bạn đã nắm khá vững kiến thức về ý thức và vật chất. Tiếp tục phát huy nhé!";
    icon = "🏆";
  } else if (score >= 30) {
    title = "Làm tốt lắm!";
    message =
      "Bạn đã đi được một chặng đường tốt. Ôn lại vài khái niệm để chinh phục điểm tối đa!";
    icon = "🌟";
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

document.getElementById("restartButton")
  .addEventListener("click", startGame);

soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;

  soundToggle.textContent = soundOn ? "🔊" : "🔇";

  soundToggle.setAttribute(
    "aria-label",
    soundOn ? "Tắt âm thanh" : "Bật âm thanh"
  );

  if (soundOn) playTone(660);
});
