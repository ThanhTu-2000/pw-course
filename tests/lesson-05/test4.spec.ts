import { test } from "@playwright/test";

test("Add and Search Note", async ({ page }) => {
    await test.step("Go to and CLick", async () => {
        //Đi tới trang web
        await page.goto("https://material.playwrightvn.com/");

        //Click Bài học 4
        await page
            .locator("//a[contains(text(), 'Bài học 4: Personal notes')]")
            .click();
    });

    await test.step("Thêm Note", async () => {
        let arrAction = [
            "click",
            "fill",
            "type",
            "hover",
            "check",
            "uncheck",
            "selectOption",
            "press",
            "dbclick",
            "dragAndDrop",
        ];
        let arrDescription = [
            "Hàm click dùng để thực hiện click vào các phần tử trên trang web",
            "Hàm fill dùng để điền văn bản vào cách trường input hoặc textarea trên trang web",
            "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thục tế của người dùng",
            "Hàm hover dùng để di chuyển con trỏ đến vị trí của phần tử kích hoạt hiệu ứng hover",
            "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked",
            "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked",
            "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown",
            "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác",
            "Hàm dbclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web",
            "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web",
        ];

        for (let i = 0; i < 10; i++) {
            await page.locator("//input[@id='note-title']").fill(arrAction[i]);
            await page
                .locator("//textarea[@id='note-content']")
                .fill(arrDescription[i]);
            await page.click("//button[@id='add-note']");
        }
    });

    await test.step("Search", async () => {
        await page.locator("//input[@id='search']").pressSequentially("một hoặc nhiều", {delay: 500});
    });
});
