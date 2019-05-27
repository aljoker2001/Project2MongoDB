var friends = [
    {
        "name": "Wade Wilson",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmarvelmovies%2Fimages%2F6%2F66%2FDeadpool_promo.png%2Frevision%2Flatest%3Fcb%3D20150707202600&sp=d371047ee7e46fbccbf9ce18e1093209&t=default",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Peter Parker",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2Fda%2F0c%2Fe1da0c91ecc91b58202bcf54fda86292.jpg&sp=5c613aa01901236ede1adfc4242044fc&t=default",
        "scores": [
            1,
            2,
            5,
            3,
            4,
            2,
            2,
            1,
            3,
            2
        ]
    },
    {
        "name": "Tony Stark",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F647f741a-99c7-4d63-8476-aab9005c1d7d%2Fd9y8ni1-d6894c38-0f6b-44bf-95b8-aeaacb24922e.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cstrp%2Ftony_stark_01_by_merrogers_d9y8ni1-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5OSIsInBhdGgiOiJcL2ZcLzY0N2Y3NDFhLTk5YzctNGQ2My04NDc2LWFhYjkwMDVjMWQ3ZFwvZDl5OG5pMS1kNjg5NGMzOC0wZjZiLTQ0YmYtOTViOC1hZWFhY2IyNDkyMmUucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pq8l-dMtzNjIq2dX8QW5B13bAvwZ-Hg-24oFbm61GRQ&sp=7e05f1d0db556afc749be726abceef47&t=default",
        "scores": [
            2,
            4,
            1,
            3,
            4,
            5,
            2,
            4,
            2,
            3
        ]
    },
    {
        "name": "Carol Danvers",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fwww.updateordie.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fcaptain_marvel__2019___ew_cover_textless_by_williansantos26-dcm6a68.jpg&sp=387a793850c214653b5685109cd251a0&t=default",
        "scores": [
            1,
            2,
            5,
            3,
            5,
            5,
            5,
            2,
            5,
            1
        ]
    },
    {
        "name": "Mantis",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Fi%2Fc4f77b6d-67d3-4508-b21d-9d78276b4f53%2Fdcnvrky-6e18f34d-ec06-4b77-ad20-4d324c0e43c7.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Fmantis_by_chrismonvel_dcnvrky-pre.jpg&sp=10b53abc9f8d382d4dd4a66595a9b63d&t=default",
        "scores": [
            4,
            2,
            3,
            1,
            5,
            4,
            2,
            3,
            2,
            4
        ]
    },
    {
        "name": "Peter Quill",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F46782f85-4fba-471e-b1e9-aee117e1dc44%2Fd9dcd3r-a87e5469-463f-46df-9f78-f730bff9c667.jpg%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Fstar_lord_peter_quill_cosplay_nycc_2015_by_joel111011_d9dcd3r-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY0OCIsInBhdGgiOiJcL2ZcLzQ2NzgyZjg1LTRmYmEtNDcxZS1iMWU5LWFlZTExN2UxZGM0NFwvZDlkY2Qzci1hODdlNTQ2OS00NjNmLTQ2ZGYtOWY3OC1mNzMwYmZmOWM2NjcuanBnIiwid2lkdGgiOiI8PTI3MzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zcB2Xv9vOZtXhFt_RrsTLBmITQ3ecIC2L1uECEDEHjg&sp=0f8345ed6137983ccab9775a334b40f2&t=default",
        "scores": [
            1,
            5,
            5,
            5,
            5,
            5,
            5,
            1,
            1,
            1
        ]
    },
    {
        "name": "Groot",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F92757758-e133-4817-b231-42c03ee4df5a%2Fd7xxt9u-5aad4e7d-25ee-4144-bc44-8c0d843c7a80.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cstrp%2Fgroot_by_night_of_void_d7xxt9u-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzkyNzU3NzU4LWUxMzMtNDgxNy1iMjMxLTQyYzAzZWU0ZGY1YVwvZDd4eHQ5dS01YWFkNGU3ZC0yNWVlLTQxNDQtYmM0NC04YzBkODQzYzdhODAucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4N_TVUhWvJ9WtKDcICW3mw50IZfL4F5Z6V4qUYw5MIo&sp=9f126a1868d1b1ab271189d1f2a3b950&t=default",
        "scores": [
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
        ]
    },
    {
        "name": "Rocket Raccoon",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F17d52be9-f2e9-4b3b-8dbf-9f53356a3f5f%2Fd6q56uo-617eaea2-e45e-44b4-bfcb-eb274948624f.jpg%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Fmarvel_legends_rocket_raccoon_redesign_custom_3_by_luxusik_d6q56uo-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE3ZDUyYmU5LWYyZTktNGIzYi04ZGJmLTlmNTMzNTZhM2Y1ZlwvZDZxNTZ1by02MTdlYWVhMi1lNDVlLTQ0YjQtYmZjYi1lYjI3NDk0ODYyNGYuanBnIiwid2lkdGgiOiI8PTk2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iOseFRe4DPtUQ6U1pz6M7yUyOam3ZboU14xwzDIanIY&sp=0aa24772fcd4e5dd6e61217414c0e234&t=default",
        "scores": [
            5,
            4,
            2,
            3,
            2,
            3,
            4,
            5,
            2,
            3
        ]
    },
    {
        "name": "Steven Strange",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F6b%2F79%2F156b796b63f7d3b546d593ad4ac39c99.jpg&sp=1c990c70ec82ffc897b8d24c227739f7&t=default",
        "scores": [
            3,
            3,
            3,
            2,
            4,
            3,
            4,
            2,
            4,
            5
        ]
    },
    {
        "name": "T'Challa",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fee%2F56%2F76%2Fee56766da46eae05ad352dbde43daf3b.jpg&sp=a9f9a8e31f8079d3a8865fb47ea80414&t=default",
        "scores": [
            4,
            4,
            1,
            2,
            4,
            4,
            3,
            5,
            2,
            4
        ]
    },
    {
        "name": "Steve Rogers",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb7%2F8a%2F11%2Fb78a114f78607247ebce78c302622e54.jpg&sp=973429531adc35008745400e1ae7539e&t=default",
        "scores": [
            5,
            1,
            1,
            2,
            4,
            3,
            4,
            1,
            3,
            5
        ]
    },
    {
        "name": "Frank Castle",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F7e90ef75-4205-4390-b428-66f54986f4d2%2Fdd0zqy1-f3e7e935-b72b-46c2-8033-abc9440100ab.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cq_70%2Cstrp%2Ffrank_castle___the_punisher_by_kohaku_art_dd0zqy1-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMzMyIsInBhdGgiOiJcL2ZcLzdlOTBlZjc1LTQyMDUtNDM5MC1iNDI4LTY2ZjU0OTg2ZjRkMlwvZGQwenF5MS1mM2U3ZTkzNS1iNzJiLTQ2YzItODAzMy1hYmM5NDQwMTAwYWIucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kj1ldFjSSC92oqF2zsNTkn_iYLfsRZhZfaYuWs-uY3k&sp=6ccf286a61b0429eb2bea7f1f23aec91&t=default",
        "scores": [
            2,
            4,
            3,
            4,
            1,
            3,
            4,
            1,
            5,
            1
        ]
    },
    {
        "name": "Scott Lang",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fbf8ed809-1e39-4951-b7ca-1ec9ab97c9c0%2Fdacd8a0-03ea209f-fe6f-4e8c-b59c-533f85fe6260.png%2Fv1%2Ffill%2Fw_774%2Ch_1032%2Cstrp%2Fhomem_formiga_ant_men_scott_lang__avengers_disass__by_lukbr_dacd8a0-pre.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcL2JmOGVkODA5LTFlMzktNDk1MS1iN2NhLTFlYzlhYjk3YzljMFwvZGFjZDhhMC0wM2VhMjA5Zi1mZTZmLTRlOGMtYjU5Yy01MzNmODVmZTYyNjAucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.S-jqqrZDZl2-L2VWAj9rTOuuoeaFcdwAGvvsR-DT87E&sp=650d2d2dfaee2a84f654135d83bab12e&t=default",
        "scores": [
            2,
            4,
            4,
            2,
            4,
            1,
            3,
            4,
            1,
            4
        ]
    },
    {
        "name": "Hope Van Dyne",
        "photo": "https://browse.startpage.com/do/show_picture.pl?l=english&rais=1&oiu=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffa%2Fce%2Fc2%2Ffacec294dced43c12898c3e0b3a3d7cb.jpg&sp=fbb8f855604c7a182c23be8643142238&t=default",
        "scores": [
            4,
            4,
            1,
            2,
            3,
            4,
            1,
            4,
            3,
            2
        ]
    },
]

module.exports = friends;