using Microsoft.EntityFrameworkCore.Migrations;

namespace EvolutionX.Migrations
{
    public partial class UpdateXboxProfileIdToString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "XboxProfileUserId",
                table: "Users",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "XboxProfileUserId",
                table: "Users",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
