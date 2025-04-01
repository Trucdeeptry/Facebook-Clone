import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function formatTime(timestamp) => {
  const createdAt = dayjs(timestamp);
  const now = dayjs();

  return now.diff(createdAt, "day") > 7
    ? createdAt.format("DD/MM/YYYY") // Nếu hơn 7 ngày, hiển thị ngày tháng
    : createdAt.fromNow(); // Nếu dưới 7 ngày, hiển thị thời gian tương đối
};
