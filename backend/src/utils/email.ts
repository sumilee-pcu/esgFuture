import nodemailer from "nodemailer";
import config from "../config";

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.secure,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: config.email.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
    console.log(`Email sent to ${options.to}`);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

export const sendVerificationEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const verifyUrl = `${config.urls.frontend}/verify-email?token=${token}`;

  await sendEmail({
    to: email,
    subject: "이메일 인증 - 미래산업융합학회",
    html: `
      <h1>이메일 인증</h1>
      <p>미래산업융합학회 회원가입을 환영합니다.</p>
      <p>아래 링크를 클릭하여 이메일 인증을 완료해주세요:</p>
      <a href="${verifyUrl}">이메일 인증하기</a>
      <p>이 링크는 24시간 동안 유효합니다.</p>
    `,
    text: `이메일 인증 링크: ${verifyUrl}`,
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const resetUrl = `${config.urls.frontend}/reset-password?token=${token}`;

  await sendEmail({
    to: email,
    subject: "비밀번호 재설정 - 미래산업융합학회",
    html: `
      <h1>비밀번호 재설정</h1>
      <p>비밀번호 재설정을 요청하셨습니다.</p>
      <p>아래 링크를 클릭하여 비밀번호를 재설정해주세요:</p>
      <a href="${resetUrl}">비밀번호 재설정하기</a>
      <p>이 링크는 1시간 동안 유효합니다.</p>
      <p>요청하지 않으신 경우 이 이메일을 무시하셔도 됩니다.</p>
    `,
    text: `비밀번호 재설정 링크: ${resetUrl}`,
  });
};

export const sendPaperSubmissionConfirmation = async (
  email: string,
  paperTitle: string,
  paperId: string
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: "논문 투고 접수 확인 - 미래산업융합학회",
    html: `
      <h1>논문 투고 접수 확인</h1>
      <p>논문이 성공적으로 접수되었습니다.</p>
      <p><strong>논문 제목:</strong> ${paperTitle}</p>
      <p><strong>접수 번호:</strong> ${paperId}</p>
      <p>심사 진행 상황은 논문 투고 시스템에서 확인하실 수 있습니다.</p>
    `,
  });
};

export const sendReviewAssignmentEmail = async (
  email: string,
  paperTitle: string,
  dueDate: Date
): Promise<void> => {
  await sendEmail({
    to: email,
    subject: "논문 심사 배정 안내 - 미래산업융합학회",
    html: `
      <h1>논문 심사 배정 안내</h1>
      <p>새로운 논문 심사가 배정되었습니다.</p>
      <p><strong>논문 제목:</strong> ${paperTitle}</p>
      <p><strong>심사 마감일:</strong> ${dueDate.toLocaleDateString("ko-KR")}</p>
      <p>논문 투고 시스템에 로그인하여 심사를 진행해주시기 바랍니다.</p>
    `,
  });
};
