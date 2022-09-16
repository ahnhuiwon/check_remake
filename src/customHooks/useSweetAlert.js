import Swal from "sweetalert2";
import { useContentsUdt } from "./useContents";

export const useSwalModule = () => {

    const { close_mode } = useContentsUdt();

    const delete_swal = (param, filter) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            text: "추가하기 버튼으로 복구할 수 있습니다.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: '네, 삭제합니다.',
            cancelButtonText: '취소합니다.'
        }).then((result) => {
          if (result.isConfirmed) {

            close_mode(param, filter);

            Swal.fire(
              '완료되었습니다!',
              '선택하신 컨텐츠가 삭제되었습니다.',
              'success'
            )
          }
        })
    }

    return { delete_swal }
}