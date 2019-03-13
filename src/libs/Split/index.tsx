/**
 * author: Nguyen Thien Quang
 * date: 12/03/2018
 * description: Phân tích 1 chuỗi thành những chuỗi có chiều dài được xác định
 * keywords: split string.
 */

class Split {

    // Chuỗi replace
    protected keyReplace: string = '&1;';

    // Chiều dài tối đa của chuỗi
    protected maxLength: number = 50;

    // Chuỗi dùng để chia tách
    protected splitKey: string = ' ';

    // số lượng chuỗi hiện tại đã chia tách thành công
    protected countSource: number = 0;

    // Kết quả
    protected source: string[] = [];

    // thông báo có lỗi
    protected error: boolean = false;

    public splitMessage(message: string): boolean | string[] {
        this.main(message);

        if(this.error){
            return false;
        }

        // chỉ replace 1 chuỗi con duy nhất trong chuỗi con để
        // không làm ảnh hưởng tới tin nhắn của người dùng
        return this.source.map(node => {
            return (node.replace(this.keyReplace, String(this.source.length)));
        });
    }

    protected main(message: string): void {

        if(message.length <= this.maxLength){
            this.source = [message];
            return;
        }

        // Chuỗi phân chia bởi dấu phân tách
        const splited: string[] = message.split(this.splitKey);

        const splitedLength = splited.length;

        for (let i = 0; i < splitedLength; i++) {

            const node: string = splited[i];

            // kiểm tra chuỗi chuẩn bị nối có chiều dài được chấp nhận hay không
            if (!this.checkLength(node)) {
                this.error = true;
                break;
            }

            const index = this.source.length - 1;

            // nếu là chuỗi rỗng thì bỏ qua
            if (this.source.length === 0) {
                this.createMessage(1, node);
            } else {

                const newTxt = this.concacMessage(this.source[index], node);
                if (this.checkLength(newTxt, false)) {
                    this.source[index] = newTxt;
                } else {
                    this.createMessage(index + 2, node);
                }

            }

            const sourceLength = this.source.length;

            /**
             * Kiểm tra đếm số đã chính xác hay chưa
             * trường hợp đếm số 1/2 qua 1/10 thì chuỗi đã bị kéo dài ra
             * nên phải tính toán lại từ đầu
             */
            if (this.countSource - sourceLength > 10) {
                return this.main(message);
            }

        }
    }

    /**
     * Kiểm tra chiều dài của chuỗi
     * @param value string
     */
    protected checkLength(value: string, isInit = true) {

        /**
         * Nếu là chuỗi khởi tạo thì nó sẽ bao gồm chuỗi đếm
         * nên phải cộng thêm độ dài chuỗi đếm vào
         * Ví dụ: chuỗi "aaaa..." dài 50 ký tự, nếu cộng thêm chuỗi đếm 1/2
         * thì chuỗi cuối sẽ bị lỗi
         */
        if(isInit){
            return this.countSource + value.length < this.maxLength + this.keyReplace.length;
        }else{
            return value.length < this.maxLength + this.keyReplace.length;
        }
    }

    // khởi tạo 1 chuỗi mới
    // và đưa nó vào danh sách nếu thỏa mãn điều kiện
    protected createMessage(index: number, node: string) {
        // khởi tạo 1 chuỗi mới
        const newTxt = this.initMessage(index, node);

        // kiểm tra chiều dài của chuỗi
        if (this.checkLength(newTxt)) {
            this.source.push(newTxt);
            this.countSource++;
        } else {
            this.error = true;
        }
    }
    /**
     * tạo chuỗi khởi tạo
     * @param index : vị trí hiện tại của chuỗi trong danh sách chuỗi đã phân tách thành công
     * @param val1 : chuỗi
     */
    protected initMessage(index: number, val1: string) {
        return `${index}/${this.keyReplace} ${val1}`;
    }

    // Gộp 2 chuỗi con lại thành 1 chuỗi lớn hơn
    protected concacMessage(val1: string, val2: string) {
        return `${val1} ${val2}`;
    }
}

export default function splitMessage(message: string){

    const split = new Split();

    return split.splitMessage(message);

}
