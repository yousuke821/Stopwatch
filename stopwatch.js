const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// �J�n����
let startTime;
// ��~����
let stopTime = 0;
// �^�C���A�E�gID
let timeoutID;

// ���Ԃ�\������֐�
function displayTime() {

  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(1, '0');
  const m = String(currentTime.getMinutes()).padStart(1, '0');
  const s = String(currentTime.getSeconds()).padStart(1, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0').slice(0,1);

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 8);
}

// �X�^�[�g�{�^�����N���b�N���ꂽ�玞�Ԃ�i�߂�
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

// �X�g�b�v�{�^�����N���b�N���ꂽ�玞�Ԃ��~�߂�
stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

// ���Z�b�g�{�^�����N���b�N���ꂽ�玞�Ԃ�0�ɖ߂�
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '0:0:0:0';
  stopTime = 0;
});