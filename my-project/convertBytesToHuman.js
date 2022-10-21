/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof bytes !== 'number' || bytes < 0) {
        return false;
    }

    let kbytes = bytes / 1024;
    let mbytes = kbytes / 1024;
    let gbytes = mbytes / 1024;

    if (bytes < 1024) {
        return bytes + " B";
    } else if (kbytes >= 1 && kbytes < 1024) {
        return Number(kbytes.toFixed(2)) + ' KB';
    } else if (mbytes >= 1 && mbytes < 1024) {
        return Number(mbytes.toFixed(2)) + ' MB';
    } else {
        return Number(gbytes.toFixed(2)) + ' GB';
    }
}
