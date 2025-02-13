interface BaseInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

export function BaseInput({
  type,
  placeholder,
  value,
  onChange,
  label,
  className = "",
}: BaseInputProps) {
  return (
    <div>
      {label && <label className="block mb-2">{label}</label>}
      <input
        className={`w-full h-[58px] bg-gray-100 py-4 px-6 rounded-xl ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmailInput({ value, onChange }: InputProps) {
  return (
    <BaseInput
      type="email"
      placeholder="이메일을 입력해주세요"
      value={value}
      onChange={onChange}
      label="이메일"
    />
  );
}

export function NickNameInput({ value, onChange }: InputProps) {
  return (
    <BaseInput
      type="text"
      placeholder="닉네임을 입력해주세요"
      value={value}
      onChange={onChange}
      label="닉네임"
    />
  );
}

export function PasswordInput({ value, onChange }: InputProps) {
  return (
    <BaseInput
      type="password"
      placeholder="비밀번호를 입력해주세요"
      value={value}
      onChange={onChange}
      label="비밀번호"
    />
  );
}

export function PasswordCheckInput({ value, onChange }: InputProps) {
  return (
    <BaseInput
      type="password"
      placeholder="비밀번호를 다시 한 번 입력해주세요"
      value={value}
      onChange={onChange}
      label="비밀번호 확인"
    />
  );
}
