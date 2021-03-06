﻿namespace myProducts.Xamarin.Contracts.i18n
{
	public interface ITranslation
	{
		/// <summary>
		/// Two letter iso code (e.g. "de", "en")
		/// </summary>
		string IsoCode { get;}

		/// <summary>
		/// Set to true, to use it as a default, if device's language is not found
		/// </summary>
		bool IsDefault { get; }

		string UserLogin { get; }
		string UserName { get; }
		string Password { get; }
		string LogIn { get; }
		string LogInNotPossible { get; }
		string Articles { get; }
		string Gallery { get; }
		string Logs { get; }
		string Statistics { get; }
		string Info { get; }
		string Overview { get; }
		string Search { get; }
		string Name { get; }
		string Code { get; }
		string Description { get; }
		string LogOut { get; }
		string InfoHeadline { get; }
		string InfoText { get; }
		string CreatedBy { get; }
	}
}